# Distributed data and methods for districuting

There are two general methods for distributing data on multiple datya base servers

1. Distributed transaction

Is a transaction in which all updates to all locations  (where the distributed data is stored) are gathered together and executed synchronously. Distributed database systems use a method called two-phase commit to implement distributed method transactions. Each database involved in a distributed transaction has its own recovery technique. A global recovery manager coordinates the two phases of distributes processing.

2. Data replication

During the data replication process, copies of the data are distributed from a source database to one or more target database located on separate computers. Because of this data replication differes from distributed transaction in tweo way: __timing__ and __delay in time__.

|Distributed transaction                                                | Data replication                                     | 
| --------------------------------------------------------------------- |:----------------------------------------------------:|
| All data is distributed on all participating sites at the same time   | Allows sites to have different data at the same time |
| Synchronous process   | Is an asynchronous process, so there is a delay during which all copies of data are matched on all sites |
| Administration becomes difficult and reliability decreases as number of participating sites increase   | Cheaper and more reliable |
| Expensive   | Cheaper and more reliable |