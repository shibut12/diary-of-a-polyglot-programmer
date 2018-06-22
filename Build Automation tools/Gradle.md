# Gradle - Build automation tool

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

## Installation

### Windows

1. Download `zip` file from [https://gradle.org/releases/](https://gradle.org/releases/)
2. Add location of `\bin` to `Path` environment variable
3. Create new `GRADLE_HOME` _environment variable_, set `path of_  __gradle directory__ as `value`
4. Open a command prompt (cmd) and run `gradle -version` to verify installtion

## Gradle commands

| Command       | Description               | Example                  |
| ------------- |:-------------------------:|:-------------------------:
| Tasks         | Lists all available tasks | `> gradle tasks`         |
| Wrapper       | Sets a specific version of Gradle to run |  |
| dependsOn     | Specify a task dependdency | `Task2.dependsOn Task1`
| init          | Create a new project with all defaults using a template | `gradle init --type java-library ` 

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

```groovy
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

```groovy
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

_Task_ is the code that _Gradle_executes

* Has a Lifecycle
  * Initialization
  * Configuration
  * Execution
* Has Properties
  * Description
  * Group that belongs to
  * Can contain own properties like the directories etx
* Has Action - Code that task executes
  * First action - Code that runs before other codes in the action
  * Last action - Code that runs the part of the task
* Has dependencies
  * Defines the order

### Creating a simple task

Add following lines into  a `build.gradle` file.
```groovy
project.task("Task1")
task("Task2")
task "Task3"
task Task4

Task4.description = "Task 4 description"
```

The `project` keyword is optional, gradle assumes all the tasks at the project level.

Run `gradle tasks --all` in a terminal window

```bash
#output
Other tasks
-----------
Task1
Task2
Task3
Task4 - Task 4 description
```

### Running a task

All taks have `doLast`, add code here to execute. It is the last code that task does. The operator `<<` has same effect as defining a doLast` block.

```groovy
task Task4
Task4.description = "Task 4 description"
Task4.doLast {
    println "This is Task 4"
}
Task3 << {
  println "This is Task 3"
}
Task3 << {
  println "This is added to Task 3
}
```

Run following commands to run the tasks.

```bash
# output for gradle Task4
$ gradle Task4

> Task :Task4
This is Task 4

# output for gradle Task3
$ gradle Task3

> Task :Task3
This is Task 3
This is added to Task 3
```

#### A better way of defining a task

```groovy
task Task5 {
    description "This is Task 5"
    doLast {
        println "This is Task 5"
    }
}
```

### Task phases

1. Initialization phase - Used to configure multi project builds
2. Configuration phase - Execute code in the task that's not action (E.g: `task.description`)
3. Execution phase - Actions are executed.

#### doFirst and doLast

`doFirst` contains the code to run before all code in the task

`doLast` contaains the code that runs after all code in the task

```groovy
task Task1 {
    description "This is Task 1"
    doFirst {
        println "Task 1 - First"
    }
    doLast {
        println "Task 1 - Last"
    }
    doFirst {
        println "Task 1 - First - ammended"
    }
}
```

```bash
# output
$ gradle Task1

> Task :Task1
Task 1 - First - ammended
Task 1 - First
Task 1 - Last
```

#### Task Dependency

The `dependsOn` command specify the _task_ that another _task_ is dependes upon. It will cause both the tasks to run.

```groovy
task Task1 {
    description "This is Task 1"
    doFirst {
        println "Task 1 - First"
    }
    doLast {
        println "Task 1 - Last"
    }
    doFirst {
        println "Task 1 - First - ammended"
    }
}

task Task2 {
    description "This is Task 2"
    dependsOn Task1
    doFirst {
        println "Task 2 - First"
    }
    doLast {
        println "Task 2 - Last"
    }
}
```

```bash
$ gradle Task2

> Task :Task1
Task 1 - First - ammended
Task 1 - First
Task 1 - Last

> Task :Task2
Task 2 - First
Task 2 - Last
```

#### Task properties

Variables can be defined using `def` keyword, then using _string interpolation_ `$` these variables can be set on _task properties_. 

##### def vs project.ext

The variable defined with `def` is avaialable within the build file scope

The variable defined with `project.ext` is available in other build files as well.



```groovy
def projectVersion = "2.0"
project.ext.buildVersion = "1.0"

task Task1 {
    description "This is Task 1"
    doFirst {
        println "Task 1 - First, project version $projectVersion"
    }
    doLast {
        println "Task 1 - Last, Build version $project.ext.buildVersion "
    }
}
```

```bash
$ gradle Task1

> Task :Task1
Task 1 - First, project version 2.0
Task 1 - Last, Build version 1.0
```