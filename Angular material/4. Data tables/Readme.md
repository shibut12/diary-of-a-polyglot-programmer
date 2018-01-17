# Scope
* Implement `mat-table` with 
    1. Pagination
    2. Sorting
    3. Filtering
* Use `MatTabledataSource` instead of implementing own data store
    1. Set Sort and Paginator in ngAfterViewInit
    
# Data tables using MatTable
MatTable is used for rendering tabular data.
It provides 3 key features.

1. pagination.
`mat-paginator` provides a pagination UI that can be used with mat table. Paginator emits events that can be used for updating data.
2. Sorting
`matSort` or `mat-sort-header` can be used for adding a sorting UI. They emit events that can be used for updating data.
3. Filtering
There is no builtin Filtering mechanism, but the data source can applied for any filters.