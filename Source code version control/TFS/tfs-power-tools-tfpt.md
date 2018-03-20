# TFS Power tools - (TFPT)

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

Usage:

```shell
tfpt scorch [/exclude:filespec1, filespec2, ..] [filespec..] [/recursive] [/batchsize:num] [/noprompt] [/preview] [/deletes] [/diff]
```

### tfpt treeclean

Delete files and folders not under version control.

Usage:

```shell
tfpt treeclean [/exclude:filespec1, filespec2, ..] [filespec..] [/recursive] [/batchsize:num] [/noprompt] [/preview]
```

### Addprojectportal

Add or move portal for an existing team project

### addprojectreports

Add or overwrite reports for an existing team project

### Annotate

Display line-by-line change information for a file

### Bind

Convert VSS-bound solutions into TFS-bound solutions

### Branches

Convert, reparent, list, and update branches

### Builddefinition

Clone, Diff or Dump build definitions

### buildprocesstemplate

Manage build process templates

### Connections

Modifies Team Explorer client connection settings

### createteamproject

Create a team project

### Getcs

Get only the changes in a particular changeset

### Online

Pend adds, edits, deletes to writable files

### Query

Query for work items

### Review

Review (diff/view) workspace changes

### Searchcs

Search for changesets matching specific criteria

### unshelve

Unshelve into workspace with pending changes

### uu

Undo changes to unchanged files in the workspace

### workitem

Create, update, or view work items