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