# Gradle

Is an open-source build automation tool that builds upon the concepts of _Apache ant_ and introduces a _Groovy_ based _domain-specific language (DSL)_ instead of _xml_ form used by _Apache maven_ for declaring project configuration. Gradle uses a _directed acyclinc graph (DAG)_ to determine the order in which tasks can be run.

* Gradle is designed for mult-project builds

## Gradle compared to ant and Maven

### Ant

* Uses xml to define build configuration
  * Hard to read and difficult to maintain

### Maven

* Provides convetions
* Supports dependency management
* Extensible using plugins
* Uses xml to define build configuration
  * Difficult to rewad and maintain

### Gradle

* Uses _Java_ to define build configuration
* Supports dependencies

## Installing and configuring gradle

* Download binaries from [gradle.org](https://gradle.org/releases/).
* Extract contents into a folder
* Add the path of `gradle-x.x` into `Path` variable
* On a command prompt run command `gradle` to verify installation

```bash
$ gradle

## output

> Task :help

Welcome to Gradle 4.8.

To run a build, run gradle <task> ...

To see a list of available tasks, run gradle tasks

To see a list of command-line options, run gradle --help

To see more detail about a task, run gradle help --task <task>

For troubleshooting, visit https://help.gradle.org

BUILD SUCCESSFUL in 1s
1 actionable task: 1 executed
```

## Gradle builds
