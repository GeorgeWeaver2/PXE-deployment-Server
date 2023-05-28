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
                Links:  https://www.golinuxcloud.com/pxe-boot-server-cloud-init-ubuntu-20-04/#Step-1_Install_and_Configure_Apache_Server
                    
2) Choosing a method:
    I decided to try the Cloud init method because any exposure to  automation and YAML files should benefit me later on.
    link:  building the 00-install-config.yaml file (https://linuxhint.com/pxe_boot_ubuntu_server/)
     
3) PArts needed to create PXE server. 
  DHCP -> PXE -> TFTP
  1) DHCP server (assigning IP addresses to client devices and PXE server so they can find each other)
  2) TFTP Server (holds ubuntu ISO files that will be installed on client)
  3) PXE Server (pushes iso file client based on IP address)


4) Attempts:
    a) virtual machines in home lab (https://www.laroberto.com/ubuntu-pxe-boot-with-autoinstall/)
    b) Laptop as Ubuntu server with router as DHCP server
        - install UBUNTU server
        - download ubunt desktop iso file
        - install pakcages (apache, nfs-kernel-server, dnsmasq)
        - create TFTP stucture
        - Edit DNSMASQ in /etc/dnsmasq.conf ( I left most of it alone but changed the DHCP range and gateway)
       