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