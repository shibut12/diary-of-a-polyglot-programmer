# SQL server


## Primary key
* Primary key automatically creates clustered index
  * Except when "non-clustered" or "clustered" index is specified
* Primary key automatically creates unique index on column
  * For non-unique columns, Index adds a 4-byte unique identifier column
### Primary key is a unique key
The only difference is that Unique key can have null, but primary key cannot have null.
## Over indexing
* consume unnecessary disk space
* Queries may use less efficient index
* Less efficient execution plan
* Reduction in overall server performance
* Confusion among developers when troubleshooting

The best practice is : drop all unused indexes.

__E.g:__
1. Create an empty table with no `index`
2. Set statistics on for monitoring time.
```sql
set statistics time on
go
```
3. Insert some data into new table
   * stats: Elapsed - 1.25 secs
4. Truncate the table
```sql 
truncate table [sales].[newSalesOrderDetail]
go
```
5. Create new indexes in new table and measure time to insert data
   * Add a _clustered index_
    ```sql
    alter table [sales].[newSalesOrderDetail]
        add constraint [pk_NewSalesOrderDetail_SalesOrderId_NewSalesOrderDetails]
        primary key clustered
        ([SalesOrderId] asc,
        [SalesOrderDetailId] asc) on [primary]
    go
    ```
    * Add a non-clustered index
    ```sql
    create nonclustered index [IX_NewSalesOderDetail_OrderQty]
        on [sales].[NewSalesOrderDetail]
        ([OrderQty] asc) on [primary]
    ```
    * Add a non-clustered index
    ```sql
    create nonclustered index [IX_NewSalesOderDetail_ProductID]
        on [sales].[NewSalesOrderDetail]
        ([ProductID] asc) on [primary]
    ```
    * Add a non-clustered index
    ```sql
    create nonclustered index [IX_NewSalesOderDetail_SpecialOfferID]
        on [sales].[NewSalesOrderDetail]
        ([SpecialOfferID] asc) on [primary]
    ```
6. Insert data again into the table (step 3)
   * stats: Time elapsed: __12 seconds__

## Duplicate Index
* Reduces the performance of `INSERT, UPDATE, DELETE` query.
* No Performance advantages to `SELECT` wueries

Best practice: Drop duplicate indexes.

__E.g:__
1. Create an empty table with no `index`
2. Set statistics on for monitoring time.
```sql
set statistics time on
set statistics io on
go
```
3. Insert some data into new table
   * stats: Elapsed - 4 secs
4. Truncate the table
```sql 
truncate table [sales].[newSalesOrderDetail]
go
```
5. Create Duplicate Indexes
   * Add a non-clustered index
    ```sql
    create nonclustered index [IX_NewSalesOderDetail_ProductID]
        on [sales].[NewSalesOrderDetail]
        ([ProductID] asc) on [primary]
    ```
    * Add a duplicate  non-clustered index
    ```sql
    create nonclustered index [IX_NewSalesOderDetail_ProductID]
        on [sales].[NewSalesOrderDetail]
        ([ProductID] asc) on [primary]
    ```
    * Add a duplicate  non-clustered index
    ```sql
    create nonclustered index [IX_NewSalesOderDetail_ProductID]
        on [sales].[NewSalesOrderDetail]
        ([ProductID] asc) on [primary]
    ```
    * Add a duplicate  non-clustered index
    ```sql
    create nonclustered index [IX_NewSalesOderDetail_ProductID]
        on [sales].[NewSalesOrderDetail]
        ([ProductID] asc) on [primary]
    ```
    * Add a duplicate  non-clustered index
    ```sql
    create nonclustered index [IX_NewSalesOderDetail_ProductID]
        on [sales].[NewSalesOrderDetail]
        ([ProductID] asc) on [primary]
    ```
6. Insert some data into new table
   * stats: Elapsed - __46 secs__
## Clustered Index
* Determines the physical order of data in table.
* Improves the performance if
   * 
## Unique Index
## Included column
## Filtered Index
## Disabled Index