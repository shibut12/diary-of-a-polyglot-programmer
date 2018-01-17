# Environment setup.

## Development environment
* [Visual studio code](https://code.visualstudio.com/download)
* [Node JS](https://nodejs.org/en/download/)
## Software development
* TypeScript
```posh
npm install -g typescript@2.4.2
```
Verify TypeScript version
```posh
tsc --version
Version 2.4.2
```
* Angular CLI
```posh
npm uninstall -g @angular/cli
npm uninstall -g angular-cli
#if npm < 5
npm cache clean 
#else
npm cache verify
npm install -g @angular/cli@1.5.3
```
* Yarn
```posh
npm install -g yarn
```
* Create a test project
```posh
ng new angular-material
cd angular-material
ng serve
```
Once compilation is completed, you will see following message "** NG Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **"

After verified this, open http://localhost:4200 on your browser to verify Angular application.
* Install Angular Material and Angular cdk on the project
```posh
npm install --save @angular/material @angular/cdk
```
* Install Animations module to support animations
```posh
npm install --save @angular/animations
```

## Generating using angular CLI
### Module
Following will create a module, `module-name`. The `--dry-run` command will preview the changes.
```posh
ng g m module-name --dry-run
```
Following command will create module in a folder called `shared`
```posh
ng g m shared\module-name --flat
```
Code for separate module to import material components
```ts
import { NgModule } from '@angular/core';

import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule
  ]
})
export class MaterialModule { }

```

## Theming
Angular material provides few pre-built themes, add them by adding following line into `project-folder/src/styles.css`

```css
@import '~@angular/material/prebuilt-themes/indigo-pink.css';
```
Available pre build themes
* deeppurple-amber.css
* indigo-pink.css
* pink-bluegrey.css
* purple-green.css

## Enable gesture support
Gensture support is enabled by installing `HammerJs`. Run following npm commands in a `shell` at project root.

1. Install Hammer.JS
```posh
npm install --save hammerjs
```
2. Add hammer.js into project
Add following into `main.ts`
```js
import 'hammerjs';
```
Main.ts after updating
```js
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import 'hammerjs';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
```
## Add material icons
1. Add `MatIconModule` into `\shared\material.module.ts`
2. Add following into `index.html`.
```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```
index.html after updating
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>AngularMaterial</title>
  <base href="/">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
<body>
  <app-root></app-root>
</body>
</html>
```

## Switch css to sass
refer to seitching css.scss.md
