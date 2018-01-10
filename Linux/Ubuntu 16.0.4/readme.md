# ubuntu 16.0.4LTS

## Cleanup boot partition
1. Check current Kernel version
```bash
$ uname -r
4.4.0-104-generic
```
2. Remove the OLD kernels
    1. List old kernels
    ```bash
    $sudo dpkg --list 'linux-image*'
    ```
    2. Remove old kernel one by one
    ```bash
    $ apt-get purge linux-image
    ```
    3. Freeup space
    ```bash
    $ apt-get autoremove
    ```
    4. Update Grub kernel list
    ```bash
    $ sudo update-grub
    ```
3. Reboot
```bash
$ sudo reboot
```