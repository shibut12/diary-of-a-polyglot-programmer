
```sql
use tempdb;
set nocount on

--Create a table
-- if not exists = run only if the table not exists
if not exists(select 1 --select only one row from sys.tables
	from sys.tables where object_id = object_id(N'customer') --object_id() return table's db object id from sys.tables
	and type = N'U') --type = u says its user defined table
begin
	create table customer(
		Id int not null primary key,
		FirstName nvarchar (200),
		LastName nvarchar(200),
		AssetId int, 
		CreatedDate datetime default(GetDate()), --default create date to current date if not provided
		ModifiedDate datetime default(GetDate())); --default modified date to current date if not provided
end;

--Data insert script
--if exists = run only if the table exists
if exists(select 1  --select top 1 from sys.tables
	from sys.tables where object_id = object_id(N'customer') --object_id() return table's db object id from sys.tables
	and type = N'U')
begin
	-- create a temporary table to hold records
	create table #customer( --table name prepend with # are provate tables and only accessible to the process created it
		Id int not null primary key,
		FirstName nvarchar (200),
		LastName nvarchar(200),
		AssetId int,
		CreatedDate datetime,
		ModifiedDate datetime);
	
	--using insert into will load all data into the temp table
	--using select & union provides a clean way to insert data into table
	insert into #customer(Id, FirstName, LastName, AssetId, CreatedDate, ModifiedDate)
	select 1, 'Andy', 'Ludgat', 101, GetDate(), GetDate() union
	select 2, 'Leslie', 'Knope', 102, GetDate(), GetDate() union
	select 3, 'April', 'Ludgate', 103, GetDate(), GetDate();

	--merge into _targetTbl as Target
	--using _sourceTbl as Source
	--	on Target.Id = Source.Id
	--when matched
	-- then UPDATE
	--when not matched by Target
	--	then INSERT
	--when not matched by Source
	--	then delete;

	merge into customer as Target
	using #customer as Source
		on target.Id = Source.Id
	when matched and (Target.AssetId <> Source.AssetId) --easy way to add more conditions, will help proper modifiedDate
		then update set
			Target.AssetId = Source.AssetId,
			Target.ModifiedDate = Source.ModifiedDate
	when not matched by Target
		then 
			insert (Id, FirstName, LastName, AssetId, CreatedDate, ModifiedDate)
			values (Source.Id, Source.FirstName, Source.LastName, Source.AssetId, Source.CreatedDate, Source.Modifieddate)
	when not matched by Source
		then delete;

	drop table #customer;
end;
```