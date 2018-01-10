## What is Git
Git is an open source, distributed `version control system`
## Why Git
### 1. Branching and Merging
Git is based on `Branching and Merging` model. This is the feature that helps Git to stand out from the any other Version control system (SCM).
Git allows developers to have any number of local branches that can be entirely independent of each other. This allows following .

* Frictionless context switching - Create a branch to try out an idea, commit few times, switch back to where you branched from, apply a patch, switch back to where you are experimenting, and merge it in.
* Role-based Code lines - Have a branch that always contains only what goes into production, another that you merge work into for testing, and several smaller ones for day to day work.
* Feature based workflow - Create new branches for each new feature your are working so you can seamlessly switch back and forth between them, then delete each branch when that feature gets merged into your mainline.
* Disposable Experimentation - Create a branch to experiment in, realize its not going to work, and just delete it - abandoning the work without anyone ever see it.
### 2. Small and Fast
Git performs almost all operations performed locally except when pushing changes into a remote, which gives a big performance advantage than the centralized SCM (TFS, VSS etc) as Git does not have to communicate to a server for every action.
### 3. Distributed
Git is a distributed SCM, this means instead of `checkout` of current source code, you do a `clone` of the entire repository. This allows multiple backups of the source code.
### 4. Data assurance
The data model that Git uses ensures the cryptographic integrity of every bit of your projects. Every file in the `commit` is check summed and retrieved by its checksum when check out. it is impossible to retrieve an in correct file.
### 5. Staging area
Git has a `staging area` or `index`. This is an intermediate area where commits can be formatted and reviewed before completing the commit. Git also allows to commit specific files using `commit -a`. 
![Git commit image](https://git-scm.com/images/about/index1@2x.png)
### 6. Free and Open source
Git is released under GPL v2. However, the term `Git` and `logo` are trademarked.

## Read the free book Pro Git online
[Link to Pro Git ebook](https://git-scm.com/book/en/v2)
## Configuration
### Setting Email Address
#### For a single repository
````bash
$ git config user.email "email@server.com"
````
#### For every repository on the computer
````bash
$ git config --global user.email "email@server.com"
````