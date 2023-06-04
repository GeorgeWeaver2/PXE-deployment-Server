<h1>Creating a Ubuntu PXE deployment server for Non-profit</h1>
 <br>
 
<h2>Goal:</h2>
Create a way for the Non-profit to install their custom linux image over wifi removing the need to install it by USB on every device. 
<br>

<h2>Steps I used to build the PXE server</h2>

<h3> Research: Identifying the steps required to do accomplish this likely hood of success</h3>
<p>I knew that operating systems could booted over wifi using PXE using a server, and that windows useed a SCCM server to deploy OS images via HTTP to clients. However, I wasn't sure how to perform this action for Linux, so I looked for a general, high level, processes, visual representation of the devices and services involved, and the specific methods for accomplishing this. <p>
 
**General Overview** (https://askubuntu.com/questions/339427/is-it-possible-to-install-ubuntu-through-network)

**Visual representation of the devices and services needed:**
 ![image](https://github.com/GeorgeWeaver2/PXE-deployment-Server/assets/97357375/db6614b8-fb30-4b7a-8b8d-615c3e5cd124)
 <br>
 **Methods for installing Ubuntu Over the Network**
 |Method | Link & Instructions |
 |-------|------|
 |1) Ubiquity/ Ubuntu Desktop Installer (GUi-based manual installer)|https://www.molnar-peter.hu/en/ubuntu-jammy-netinstall-pxe.html|
 |  |step by step instructions: https://help.ubuntu.com/community/Installation/LocalNet
 |2) Subquity/ curtin (server install run by python)||
 |3) Cloud-init & Quickstart (automated install using cloud image |  1) https://www.golinuxcloud.com/pxe-boot-server-cloud-init-ubuntu-20-04/#Step-1_Install_and_Configure_Apache_Server 2)   (https://linuxhint.com/pxe_boot_ubuntu_server/)     |
 
<h3>Choosing a method:</h3>
    I decided to try the Cloud init method first to gain exposure to  automation and YAML files should benefit me later on.
    link:  building the 00-install-config.yaml file /PXE-deployment-Server/blob/main/00-installer-config.yaml
     
<h3> Attempts (Try until ..Success?)<h3>
 <br>
 1. **Cloud Init**  <br>
 2. **Virtual machines in home lab** (https://www.laroberto.com/ubuntu-pxe-boot-with-autoinstall/) <br>
 3. **Laptop as Ubuntu server with router as DHCP server**
        - install UBUNTU server
        - download ubunt desktop iso file
        - install pakcages (apache, nfs-kernel-server, dnsmasq)
        - create TFTP stucture
        - Edit DNSMASQ in /etc/dnsmasq.conf ( I left most of it alone but changed the DHCP range and gateway)
       
