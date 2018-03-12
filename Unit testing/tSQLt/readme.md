# tSQLt

Project [http://tsqlt.org/](http://tsqlt.org/)

A Unit testing framework for Microsoft SQL server. It is compatible with SQL server 2005 and above.

## Why tSQLt

* tSQLt runs within SQL server, so no need to switch between tools
* Features
  * Tests are run automatically within transactions (Keep tests independent and reduces cleanup).
  * Tests can be groups together within a schema.
  * Outputs can be generated in plaintext or xml
  * Can create fake tables and views, and to create stored procedure-spies (allows to isolate the code you are testing)
