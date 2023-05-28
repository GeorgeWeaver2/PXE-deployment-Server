Create a Ubuntu PXE boot server for Non-profit:

Goal:
Create a proof of concept so that the group and I don't have to install the custom linux image by USB on every device. I've seen this done with windows devices using SCCM. 

Steps I used to build the PXE server
1) Research: Determine this project do-able at my begineer skill level)
    a) Is this project reasonably possible at my skill level, and if so, how? I used the following link to get a genral Iea of how this could be done and I decided that I could do the basic version. (https://askubuntu.com/questions/339427/is-it-possible-to-install-ubuntu-through-network)
    b) helpful network diagram to get big picture Idea (https://linuxhint.com/pxe_boot_ubuntu_server/)
    c) Methods for installing ubuntu across the network (https://www.molnar-peter.hu/en/ubuntu-jammy-netinstall-pxe.html)

        1) Ubiquity/ Ubuntu Desktop Installer (GUi-based manual installer)
                link: https://askubuntu.com/questions/3781/does-ubiquity-support-installing-via-pxe
                step byu step instructions: https://help.ubuntu.com/community/Installation/LocalNet
        2) Subquity/ curtin (server install run by python) 
        3) Cloud-init & Quickstart (automated install using cloud image)
                Link: https://www.golinuxcloud.com/pxe-boot-server-cloud-init-ubuntu-20-04/#Step-1_Install_and_Configure_Apache_Server

2) Choosing a method:
    I decided to try the Cloud init method because any exposure to 
      
 2) PArts needed to create PXE server. The image on this website gives a good 
  DHCP -> PXE -> TFTP
  1) DHCP server (assigning IP addresses to client devices and PXE server so they can find each other)
  2) TFTP Server (holds ubuntu ISO files that will be installed on client)
  3) PXE Server (pushes iso file client based on IP address)




4) 1st attempt i.e. virutal machines in home lab (https://www.laroberto.com/ubuntu-pxe-boot-with-autoinstall/)
5) attempe with old laptop as Ubuntu server
    a) install UBUNTU server
    b) download ubunt desktop iso file
    b) install pakcages
          sudo apt-get install apache2
          sudo apt-get install nfs-kernel-server 
          sudo apt-get install dnsmasq
  c) create TFTP stucture
  d) pull iso file to folder
            sudo mount /dev/sr0 /media
            
  e) Edit DNSMASQ in /etc/dnsmasq.conf ( I copied most of this but changed the DHCP range and gateway
            #Interface information 
        #--use ip addr to see the name of the interface on your system
        interface=eth0,lo
        bind-interfaces
        domain=c-nergy.local

        #--------------------------
        #DHCP Settings
        #--------------------------
        #-- Set dhcp scope
        dhcp-range=192.168.1.2,192.168.1.200,255.255.255.0,2h

        #-- Set gateway option
        dhcp-option=3,192.168.1.1

        #-- Set DNS server option
        dhcp-option=6,192.168.1.1

        #-- dns Forwarder info
        server=8.8.8.8

        #----------------------#
        # Specify TFTP Options #
        #----------------------#

        #--location of the pxeboot file
        dhcp-boot=/bios/pxelinux.0,pxeserver,192.168.1.150

        #--enable tftp service
        enable-tftp

        #-- Root folder for tftp
        tftp-root=/tftp

        #--Detect architecture and send the correct bootloader file
        dhcp-match=set:efi-x86_64,option:client-arch,7 
        dhcp-boot=tag:efi-x86_64,grub/bootx64.efi
        
        d) setup PXE.cfg file so that PXe knows where to pull hte iso files from
        default menu.c32
            menu title Ubuntu installer

            label jammy
                    menu label Install Ubuntu J^ammy (22.04)
                    menu default
                    kernel jammy/vmlinuz
                    initrd jammy/initrd
                    append ip=dhcp cloud-config-url=/dev/null url=http://x.x.x.x/jammy-live-server-amd64.iso autoinstall ds=nocloud-net;s=http://192.168.1.252/jammy/ # Don't forget the slash at the end.

            prompt 0
            timeout 300

        





  
