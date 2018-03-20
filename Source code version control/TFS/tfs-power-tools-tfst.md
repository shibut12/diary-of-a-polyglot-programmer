# TFS Power tools - (TFST)

## Commands
### tfpt scorch

Ensure source control and local disk are identical, the local disk will be scanned for 

* Items that are not in source control
* Items which are different on disk from the workspace version
* Items which are in the workspace but missing on disk

#### Effects

* Items that are not in source control will be deleted from disk.
* Items that are different on disk from the workspace version will be downloaded from server.
* Items that are missing on disk will also be downloaded.
* Items with pending changes are exempted

#### Options

* /deletes - To download items deleted from your local disk
* /diff - To detect items which are different from the workspace version but still have their read-only bit (+R).
* /noprompt - Do not show the list of items to be deleted and downloaded in a dialog box for confirmation.
* exclide:filespec[,..] - Files and directories matching a filespec in the given list are excluded from processing
* /preview - Do not make changes, but list the potential changes
* recursive - Switch from one level of recursion to full recursion
* /diff - Use MD5 hash to compare items from the local disk
* batchsize:num - Set the batch size for server calls (default 500)
* filespec - Process only the files and directories matching this list

```shell
tfpt scorch [/exclude:filespec1, filespec2, ..] [filespec..] [/recursive] [/batchsize:num] [/noprompt] [/preview] [/deletes] [/diff]
```

### 