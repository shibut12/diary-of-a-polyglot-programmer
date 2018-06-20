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

## Gradle commands

| Command       | Description               | Example                  | 
| ------------- |:-------------------------:|:-------------------------:
| Tasks         | Lists all available tasks | `> gradle tasks`         |
| Wrapper       | Sets a specific version of Gradle to run |  |

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

* Gradle has a build file
  * Typically called `build.gradle`
  * Build file contains 
    * Tasks
    * Plugins
    * Dependencies

### Simple gradle build file

```gradle
task hello {
    doLast {
        println "Hello, Gradle"
    }
}
```

Run following command on a `terminal` to run this task

```bash
$ cd <file-location>
$ gradle hello

# Output
> Task :hello
Hello, world

BUILD SUCCESSFUL in 1s
1 actionable task: 1 executed
```

### java plugin

used to perform stadard build operations for a Java program.

Create a `build.gradle` file on the root of the Java program. The java source code should reside in `src\main\java\com\<package-name>` folder.

```gradle
apply plugin: 'java'
```

Run `gradle tasks` on a command prompt at the root of the folder to see all the available tasks for _java plugin_.

```bash
> Task :tasks

------------------------------------------------------------
All tasks runnable from root project
------------------------------------------------------------

Build tasks
-----------
assemble - Assembles the outputs of this project.
build - Assembles and tests this project.
buildDependents - Assembles and tests this project and all projects that depend on it.
buildNeeded - Assembles and tests this project and all projects it depends on.
classes - Assembles main classes.
clean - Deletes the build directory.
jar - Assembles a jar archive containing the main classes.
testClasses - Assembles test classes.

Build Setup tasks
-----------------
init - Initializes a new Gradle build.
wrapper - Generates Gradle wrapper files.

Documentation tasks
-------------------
javadoc - Generates Javadoc API documentation for the main source code.

Help tasks
----------
buildEnvironment - Displays all buildscript dependencies declared in root project '2-Java-plugin'.
components - Displays the components produced by root project '2-Java-plugin'. [incubating]
dependencies - Displays all dependencies declared in root project '2-Java-plugin'.
dependencyInsight - Displays the insight into a specific dependency in root project '2-Java-plugin'.
dependentComponents - Displays the dependent components of components in root project '2-Java-plugin'. [incubating]
help - Displays a help message.
model - Displays the configuration model of root project '2-Java-plugin'. [incubating]
projects - Displays the sub-projects of root project '2-Java-plugin'.
properties - Displays the properties of root project '2-Java-plugin'.
tasks - Displays the tasks runnable from root project '2-Java-plugin'.

Verification tasks
------------------
check - Runs all checks.
test - Runs the unit tests.

Rules
-----
Pattern: clean<TaskName>: Cleans the output files of a task.
Pattern: build<ConfigurationName>: Assembles the artifacts of a configuration.
Pattern: upload<ConfigurationName>: Assembles and uploads the artifacts belonging to a configuration.

To see all tasks and more detail, run gradle tasks --all

To see more detail about a task, run gradle help --task <task>

BUILD SUCCESSFUL in 1s
1 actionable task: 1 executed
```

## Basic Gradle tasks
