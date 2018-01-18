# Custom themes
* Imports the `mat-core()` sass mixin
    * This includes all common styles.
    * Include the new theme in styles.css / styles.scss
* Define a theme data structure
    * Composes multiple paletes
    * `mat-light-theme` or `mat-dark-theme`
## Sample custom theme
```scss
//include common style for material theme done once
@import '~@angular/material/theming';
@include mat-core();
//Define palettes for theme using material design palettes, 
//each palette can also specify lighter or darker hue
$candy-app-primary: matt-palette($mat-indigo);
$candy-app-accent: mat-palette($mat-pink, A200, A100, A400);
//Is optional, it default to red
$candy-app-warn: mat-palette($mat-red);
//Compose theme object
$candy-app-theme: mat-light-theme(
    $candy-app-primary,
    $candy-app-accent,
    $candy-app-warn
);
//include theme to core and each component used in app
@include angular0material-theme($candy-app-theme);
```
