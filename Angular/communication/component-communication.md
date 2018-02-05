## Scope
* Review all the inter component communication techniques in angular
* Identify which technique to use and when
* How components communicate with templates, including 
    * Binders
    * Getters and setters
    * Input and output properties
    * View child and View children decorators
* Use services as intermediary to communicate between components
* How to broadcast notifications from services using subject(Behavior subject)
* Communicating using router

## Introduction
1. Between Component & Template
Communication between Component and template helps to
    * View updated when data has changed
    * React to user changes
    * Ask an element to set property or perform a task
    * Check form or control state
2. Between itself of other components
    * Use service as Intermediary
        * Retain state
        * Share data
        * Send notifications
    * Use router
        * Optional parameter
        * Required parameter