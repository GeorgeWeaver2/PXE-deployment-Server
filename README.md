This is how I attempted to create a Ubuntu PXE boot server that I will pitch to the non-profit, we don't have to install the custom linux image by USB on every device. I already new that this could be done with windows devices using SCCM. I knew from previous projects involving linux that thsi would involve a significant about a configuring.

Steps I used
1) Reasearch: Determine this project do-able at my begineer skill level)
    a) Post of someone else in amlost hte same sistuation, i.e. lots of USB installs. They suggested a PXE server 
(https://askubuntu.com/questions/339427/is-it-possible-to-install-ubuntu-through-network)

    b) Good visual layout
      https://linuxhint.com/pxe_boot_ubuntu_server/
      
 2) PArts needed to create PXE server. The image on this website gives a good 
  DHCP -> PXE -> TFTP
  1) DHCP server (assigning IP addresses to client devices and PXE server so they can find each other)
  2) TFTP Server (holds ubuntu ISO files that will be installed on client)
  3) PXE Server (pushes iso file client based on IP address)

![image](https://github.com/GeorgeWeaver2/Portfolio/assets/97357375/60980d7f-cef5-49b1-8bd2-1e2d67871feb)


3) methods for running net install on PXE servers (https://www.molnar-peter.hu/en/ubuntu-jammy-netinstall-pxe.html)
        - automated install
        - GUI installer
        - CMD installer

4) 1st attempt i.e. virutal machines in home lab (https://www.laroberto.com/ubuntu-pxe-boot-with-autoinstall/)
5) attempe with old laptop as Ubuntu server
    a) install UBUNTU server
    b) install pakcages
          sudo apt-get install apache2
          sudo apt-get install nfs-kernel-server 
          sudo apt-get install dnsmasq
          
        





  
