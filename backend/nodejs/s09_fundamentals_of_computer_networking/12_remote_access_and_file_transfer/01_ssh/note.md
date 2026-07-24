SSH are 2 things:
1. Secure SHell(SSH) Protocol
2. Command line tool (for example: type **ssh -V** in your terminal)
    - Additionally we have two more things called:
        - ssh client
        - ssh server

https://www.openssh.org/

- ftp runs on port 21
- ssh runs on port 22
- telnet runs on port 23

---

## Some commands for SSH

#### 1. Check if SSH is intalled or not

    ssh -V
    dpkg -l | grep openssh-client
    dpkg -l | grep openssh-server

#### 2. SSH installation

    sudo apt update
    sudo apt install openssh-server

#### 3. Check SSH server status

    sudo systemctl status ssh

#### 4. Start SSH server

    sudo systemctl start ssh
    sudo systemctl enable ssh

#### 5. Allow firewall to connect SSH

    sodo ufw allow ssh