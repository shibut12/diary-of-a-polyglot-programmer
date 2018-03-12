# Git Cheat sheet

## Configure Git
1. Set the name that you want to attach to your commits
    * Global
    ```bash
    $ git config --global user.name "<name>"
    ```
    * Per repository
    ```bash
    $ git config user.name "<name>"
    ```
2. Set the email address that you want to attach to your commits
    * Global
    ```bash
    $ git config --global user.email "<email address>"
    ```
    * Per repository
    ```bash
    $ git config user.email "<email address>"
    ```
3. Set colorization of command line output
```bash
$ git config --global color.ui.auto
```

## Adding SSH Key Into GitHub account
A SSH Key can be used to authenticate your read write requests between git client and SCM.

1. Open Git Bash

    Git  Bash can be found in `C:\Program Files\Git\cmd` folder. If its not there down load from git-scm website.

2. Generate a new SSH key

    Enter following command for generating a SSH key.
    ```shell
    ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
    ```
    Then when prompted, provide a folder location or accept default location by pressing Enter key.

    Then you will be prompted to provide a *passphrase* and *confirm the passphrase*.

    Note down the file name of public key (id_rsa.pub).

    ```shell
    $ ssh-keygen -t rsa -b 4096 -C "test@email.com"
    Generating public/private rsa key pair.
    Enter file in which to save the key (/c/Users/<username>/.ssh/id_rsa):
    Created directory '/c/Users/<username>/.ssh'.
    Enter passphrase (empty for no passphrase):
    Enter same passphrase again:
    Your identification has been saved in /c/Users/<username>/.ssh/id_rsa.
    Your public key has been saved in /c/Users/<username>/.ssh/id_rsa.pub.
    The key fingerprint is:
    SHA256:NHJUHHDTTJJDBJCUHdfkdjfdjfdfdkfhdfSDVscew test@email.com
    The key's randomart image is:
    +---[RSA nnn6]----+
    |        dgfdg@@  |
    |  8995232..... ..|
    |  8995232.... O +|
    |  8995232....= Oo|
    |     tsts2323 =.*|
    |        @@@@@B *o|
    |  &*&*&*&*&*+ = o|
    |        ..o    . |
    |  )()(&&*^^^     |
    +----[SHAnnn]-----+

    ```
3. Add the key into ssh-agent

    Use `ls -al ~/.ssh` command to view all the available keys in the system.

    using _Clip_ command copy the contents of p_public key_ into clip board
    ```shell
    clip < ~/.ssh/id_rsa.pub
    ```
4. Add the public key into GitHub Settings.

    Open "Settings>SSH and GPG Keys" and click on _New SSH Key_. And then enter a title fo rt he key and paset contents of public key into _Key_ field. Then click on _Add SSh Key_.