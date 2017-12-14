use tempdb;
go

--Create a table
create table indexing(
Id int identity(1,1),
Name char(4000),
Company char(4000),
Pay int)
--Definition
select
	object_name(object_id) TableName,
	isnull(name, object_name(object_id)) IndexName,
	Index_Id,
	type_desc
from sys.indexes
where object_name(object_id) = 'Indexing'
go

set nocount on

--Insert values
insert into indexing values('Shibu', 'codewithdot.net', 100000)
go

--status check
select 
object_name(object_id) Name,
index_type_desc as Index_type,
alloc_unit_type_desc as data_type,
index_id as index_id,
index_depth as depth,
index_level as ind_level,
record_count as Record_count,
page_count as PageCount,
fragment_count as Fragmentation
from sys.dm_db_index_physical_stats(db_id(), object_id(N'indexing'), null, null, 'DETAILED');
go

-- insert more values
insert into indexing values
	('Tommy', 'codewithdot.net', 60000),
	('Shibz', 'codewithdot.net', 40000)
	go

--status check
select 
object_name(object_id) Name,
index_type_desc as Index_type,
alloc_unit_type_desc as data_type,
index_id as index_id,
index_depth as depth,
index_level as ind_level,
record_count as Record_count,
page_count as PageCount,
fragment_count as Fragmentation
from sys.dm_db_index_physical_stats(db_id(), object_id(N'indexing'), null, null, 'DETAILED');
go

-- insert 100 more values
insert into indexing values('Tommy', 'codewithdot.net', 60000)
GO 100

--status check
select 
object_name(object_id) Name,
index_type_desc as Index_type,
alloc_unit_type_desc as data_type,
index_id as index_id,
index_depth as depth,
index_level as ind_level,
record_count as Record_count,
page_count as PageCount,
fragment_count as Fragmentation
from sys.dm_db_index_physical_stats(db_id(), object_id(N'indexing'), null, null, 'DETAILED');
go

--create clustered index
create clustered index ci_indexingId on Indexing(Id)
go

--status check
select 
object_name(object_id) Name,
index_type_desc as Index_type,
alloc_unit_type_desc as data_type,
index_id as index_id,
index_depth as depth,
index_level as ind_level,
record_count as Record_count,
page_count as PageCount,
fragment_count as Fragmentation
from sys.dm_db_index_physical_stats(db_id(), object_id(N'indexing'), null, null, 'DETAILED');
go

-- insert 700 more values
insert into indexing values('Tommy', 'codewithdot.net', 60000)
GO 700

--status check
select 
object_name(object_id) Name,
index_type_desc as Index_type,
alloc_unit_type_desc as data_type,
index_id as index_id,
index_depth as depth,
index_level as ind_level,
record_count as Record_count,
page_count as PageCount,
fragment_count as Fragmentation
from sys.dm_db_index_physical_stats(db_id(), object_id(N'indexing'), null, null, 'DETAILED');
go

--More statistics
dbcc show_statistics ('Indexing', CI_IndexingId)
go

-- Non clustered Index
create nonclustered index NCI_Pay on Indexing(Pay)
go

--status check
select 
object_name(object_id) Name,
index_type_desc as Index_type,
alloc_unit_type_desc as data_type,
index_id as index_id,
index_depth as depth,
index_level as ind_level,
record_count as Record_count,
page_count as PageCount,
fragment_count as Fragmentation
from sys.dm_db_index_physical_stats(db_id(), object_id(N'indexing'), null, null, 'DETAILED');
go

--More statistics
dbcc show_statistics ('Indexing', NCI_Pay)
go