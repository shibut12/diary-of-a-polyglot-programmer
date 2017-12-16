## Pages
* Fundamental unit of data storage or IO in SQL server
* 1 Page is 8K
* Each page begins with a 96 byte header
* Maximum amount of datat stored in  a single row on a page is 8060 bytes.

## Extents
* Are collection of eight physically contigious pages.

## HEAP
* Is a table without clustered index
* Data rows are _not_ stored in any particular order
* data pages are not linked in a linked list

_Eg_ : An apartment has 200 units, if we consider all the units inthis apratment are in a Heap, there wont be any specific order for their location. To find any apartment, you would need to knock on the door of all apratments till find the one oyu want.

## Clustered Index
* Data rows are stored in order based on the clustered index key
* The clustered index key is implemented as a  __B-Tree__ index
* data pages in the leaf level are linked in a doubly linked list
* Clustered indexes have one row in sys.partitions with _index_id=1_
   * If _index_id>1, then it is a non-clustered index
   * If _index_id=0, then it is a Heap

## Non-clustered Index
* Non-clustered index have a B-tree index structure similar to the one in Clustered index.
   * The difference is that __non-clustered index__does not affect the order of the data rows.
* Each index row contains the non clustered key value, a row locator and any or non-key columns.

### Difference between clustered and non clustered indexes
| Clustered index                           | Non clustered index                                                                           |
--------------------------------------------|-----------------------------------------------------------------------------------------------|
|Only one clustered Index per table           |  249 Indexes per table                                                                        |
|Sort records and store data in that order  | Dont affect physical order, cerates a logical order and use pointers to physical data pages   |
|Faster for data reads                      | Faster Data insertion, updates                                                                |
|Dont need extra space to store logical structure| use extrac space to store logical structure                                              |
## Fill factor
* A method used for pre allocating space for future expansion for a particular row
* To avoid __pagesplits__ and degrade performance.
* SQL server doesnt allocate space unless you used fixed length types
   * If you used _variable_ length data type like _varchar / nvarchar_, there is possiblity that the length of these rows can change in future.
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

__DEMO__
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

__DEMO__
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
SQL Server -Primary key, automatically creates Clustered Index.
* Improves the performance if
   * Columns that contain large number of distinct values
   * CColumns that are accessed frequently
   * Columns that are often searched for range of values
   * Queries returning huge result set
* Best practices
   * Create __Clustered Indexes__ when necessary
   * Avoid wide keys
   * Avoid on creating columns frequently changing

   __DEMO__
   1. Create an empty table
   ```sql
   set nocount on
   select *
   into [sales].[MySalesOrderDetail]
   from [Sales].[SalesOrderDetail]
   Where 1 = 2
   go
   set statistics time on
   set statistics io on
   ```
   2. Insert 10,000 records into the table
   3. Select records between 40,000 and 160,000 
   ```sql
   select * 
   from [sales].[MysalesOrderDetail] sod
   where sod.[salesorderDetailId] > 40000
    and sod.[salesorderdetailId] < 16000
   go
   ```
   Stats: Data returned in _1 sec_, __15000 logical reads__
   4. Create a clustered Index
   ```sql
   alter table [sales].[MySalesOrderDetail]
    add constraint [pk_mysalesOrderDetail_salesOrderDetailId]
    primary key clustered
    ([SalesOrderDetailId] asc) on Primary
   go
   ```
   5. Select records between 40,000 and 160,000 
   ```sql
   select * 
   from [sales].[MysalesOrderDetail] sod
   where sod.[salesorderDetailId] > 40000
    and sod.[salesorderdetailId] < 16000
   go
   ```
   Stats: Data returned in 1 sec, __1500 logical reads__


## Unique Index
* Enforces uniqueness ina particular column
* Unique constrain is same as unique index
* Often improves performance of grouped by and aggregated queries

_Best practice:_ Create unique index when business needs unique values in the column.

__DEMO__
```sql
use [MyAdventureWorks]
go
set nocount on
```
1. Create a new table
```sql
select * 
into [sales].[UniSalesOrderDetail]
from [sales].[SalesOrderDetail]
where 1 = 2
go
```
2. Insert data into table and measure time
```sql
insert into [sales].[unisalesorderDetail]
([salesOrderID], [CarrierTrackingNumber], [OrderQty], [ProductId], [SpecialOfferId], 
[UnitProce], [UnitProceDiscount], [LineTotal], [rowguid], [ModifiedDate])
select [salesorderId], [CarrierTrackingNumber], [OrderQty],
[ProductId], [SpecialOfferID], [UnitPrice],[UnitPriceDiscount],[LineTotal],[rowguid],
[modifiedDate]
from [Sales].[SalesOrderDetail]
go
```
3. Select and distinct
```sql
select [salesOrderDetailID]
from [Sales].[UniSalesOrderDetail]
go
select distinct [SalesOrderDetailID]
from [Sales].[UniSalesOrderDetail]
go
```

If the __Execution plan__ is enabled, the first query will cost about 29% and the query with _distinct_ will cost about 71%.
4. Create a Unique non-clustered index
```sql 
alter table [sales].[UniSalesOrderDetail]
add constrain [ux_UniSalesOrderDetail_SalesOrderDetailID]
unique nonclustered
(
    [SalesOrderDetailID]
) on [primary]
go
```
5. Run same Select and distinct queries as __step 3__
```sql
select [salesOrderDetailID]
from [Sales].[UniSalesOrderDetail]
go
select distinct [SalesOrderDetailID]
from [Sales].[UniSalesOrderDetail]
go
```

If the __Execution plan__ is enabled, the first query will cost about __50%__ and the query with _distinct_ will cost about __50%__. compared to __29% and 71%__ in step 3.
6. Add Unique index
```sql
create unique nonclustered index
[IX_UniSalesOrderDetail_SalesOrderDetailID]
on [Sales].[UniSalesOrderDetail]
(
    [SalesOrderdetailID]
) on [primary]
go
 -- check ssms >> Database >> Table >> Constrains
 -- check ssms >> Database >> Table >> Indexes
```
## Included column

* Extends nonclustered index by adding a non-key column in leaf node
* Single index can be applied to multiple queries
* Overcomes index key size of 900 byes and 16 columns
* All data types allowed (except text, ntext, image)

_Best practice_: Avoid adding unnecessary columns to key or non-key position in index.

__DEMO__
```sql
use [MyAdventureWorks]
go
set nocount on
```
1. Create an empty table
```sql
select * into [Sales].[InclSalesOrderDetail]
from [Sales].[SalesOrderDetail]
Where 1 = 2
go
```
2. Measure _Insert_ time into new table
```sql
insert into [Sales].[InclSalesOrderDetail]
([SalesOrderID], [CarrierTrackingNumber], [OrderQty], [ProductID], [SpecialOfferID], [UnitPrice], [UnitPriceDiscount], [LineTotal], [rowguid], [ModifiedDate])
select [SalesOrderID], [CarrierTrackingNumber], [OrderQty], [ProductID], [SpecialOfferID], [UnitPrice], [UnitPriceDiscount], [LineTotal], [rowguid], [ModifiedDate]
from [Sales].[SalesOrderDetail]
go
```
3. Add a _nvarchar_ column
```sql
alter table [Sales].[InclSalesOrderDetail]
add col1 nvarchar(1000) default(replicate('a', 1000)) not null
go
```
4. select and distinct
```sql
select [SalesOrderId], [ProductID], [col1]
from [Sales].[InclSalesOrderDetail] sod
where sod.[SalesOrderId] > 40000
 and sod.[SalesOrderID] < 50000
go
```

5. Create clustered index



## Filtered Index
## Disabled Index