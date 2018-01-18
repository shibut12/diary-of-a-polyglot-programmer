# Dialogs and popups

## Scope
* Implement dialogs using MatDialog.

# MatDialog
1. Create a Dialog
```typescript
let dialogRef = dialog.open(
    UserProfileComponent,
    {
        height: '400px',
        width: '600px'
    }
);
```
2. Open a dialog
```typescript
dialogRef.afterClosed().subscribe(result => {
    console.log('Dialog result: ${result}');
});
```
3. Closing a dialog
```typescript
dialogRef.close('pizza');
```

## Components of MatDialog
* mat-dialog-title
Represents the title of a dialog
```html
<h2 mat-dialog-title>Delete All</h2>
```
* mat-dialog-content
Represent the message body of a dialog
```html
<mat-dialog-content> Are you sure?</mat-dialog-content>
```
* mat-dialog-actions
Represents the action buttons on the dialog
```html
<mat-dialog-actions>
    <button mat-button mat-dialog-close>No</button>
    <button mat-button [mat-dialog-close]="true">Yes</button>
</mat-dialog-actions>
```