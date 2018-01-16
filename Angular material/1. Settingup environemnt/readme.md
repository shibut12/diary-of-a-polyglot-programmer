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
npm cache clean
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