# Angular material
A set of reusable, well tested and accessible components based of google material design specifications for building client side web applications.

## Material Design Goals
* Synthesizes classic principles.
* Provide a unified experience across devices
## Underlying principles
* Material is a metaphor
* Bold graphic and intentional
* Motion provides meaning
    * Natural acceleration and deceleration

## Generating using angular CLI
### Module
Following will create a module, `module-name`. 
```posh
ng g m module-name --dry-run
```
* --dry-run
The `--dry-run` command will preview the changes. `
* Create module in separate folder
Following command will create module in a folder called `shared`. 
```posh
ng g m shared\module-name
```
* --flat
`--flat` will remove duplicate folder name. I.e. without `--flat` this command will create `module-name` in `\shared\module-name\module-name.ts`, with `--flat`, it will create file in `\shared\module-name.ts`
```posh
ng g m shared\module-name --flat
```
* --routing
The routing paramter will create 2 files one for routing and another one for module.
```posh
 ng g m demo\demo --dry-run ---flat --routing
  >src/app/demo/demo-routing.module.ts (247 bytes)
  > create src/app/demo/demo.module.ts (271 bytes)
```
### Components
following command will generate template (html), style (css), module (.ts), and test (spec.ts) files.
```posh
ng g c component-name
```
* --no-spec
will avoid creating a separate `ts` file for tests.
* --inline-style
Will avoid creating a separate file for styles but embed styles in componet.module.ts file.
* --inline-template
Will avoid creating a separate (html) file for template but emmbed templates in the module.ts file.

```posh
ng g c demo/buttons --dry-run --no-spec --inline-style --inline-template  
    > src/app/demo/buttons/buttons.component.ts (259 bytes)
    > update src/app/demo/demo.module.ts (351 bytes)
  ```
### Services
Creates singleton shared services that can be injected into app module and can be shared between multiple components / modules.
1. Create service
```posh
ng g s contactmanager\services\user --dry-run
  > create src/app/contactmanager/services/user.service.spec.ts (405 bytes)
  > create src/app/contactmanager/services/user.service.ts (117 bytes)
  ```
2. Update module to inject service into app
Add following into ContactmanagerModule.ts
```ts
providers: [
    UserService
  ]
```
Updated ContactmanagerModule.ts
```ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../shared/material.module';

import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { UserService } from './services/user.service';

const routes: Routes = [
  { path: '', component: ContactmanagerAppComponent,
    children: [
      { path: '', component: MainContentComponent }
    ] },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    UserService
  ],
  declarations: [ContactmanagerAppComponent, ToolbarComponent, MainContentComponent, SidenavComponent]
})
export class ContactmanagerModule { }

```
### Class
Following command will generate a class in angular app.
```posh
ng g class contactmanager\models\user --dry-run
  create src/app/contactmanager/models/user.ts (22 bytes)
```

## MatIconRegistry
It is an injectable service that allows you to associate icon names with svg urls and define aliases for css font classes.

Allows to define once and make the icons available to all the components (need the registration in app.component.ts).
### DomSanitizer Service
Is a service from angular that prevents XSS vulnerabilities. Any url that pass through MatIconRegistry has to marked trusted by DomSanitizer service.
### Steps to integrate icon registry
1. Add following into constructor of app.component.ts
```ts
iconRegistry: MatIconRegistry, sanitizer: DomSanitizer
```
2. Import MatIconRegistry and DomSanitizer
```ts
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
```
3. Add icon set and bypass security for specific urls
Update constructor as below
```ts
iconRegistry.addSvgIconSet(sanitizer.bypassSecurityTrustResourceUrl('assets/avatars.svg'));
```

Completed `app.component.ts`
```ts
import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-contactmanager-app',
  template: `
    <app-sidenav></app-sidenav>
  `,
  styles: []
})
export class ContactmanagerAppComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconSet(sanitizer.bypassSecurityTrustResourceUrl('assets/avatars.svg'));
   }

  ngOnInit() {
  }

}
```