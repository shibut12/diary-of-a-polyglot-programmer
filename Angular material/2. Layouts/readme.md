## Scope
1. Use Flex layout to create a 2 column layout.
2. Use media queries to support mobile devices

## important links
1. Tburleson layout demo
[Link to https://tburleson-layouts-demos.firebaseapp.com](https://tburleson-layouts-demos.firebaseapp.com)

## Flex layout core terminologies
Provides a layout api using FlexBox CSS and Media query. support angular 4.1 or higher.
![Flex layout overview](https://github.com/shibut12/Notes/blob/master/Angular%20material/2.%20Layouts/flex-layout.PNG)
### Flex container 
A flex-container is a box of elements (flex or inline-flex).
### Flex Items
Inflow-childrens of flex-container are called
__flex-item__. The width of flex-item is called __main size__, the height of flex-item is called __cross size__.
### Flex Layout model
flex-items are laid out in a flex-container using flex-layout-model.
### Primary axis
The main axis along which flex-items are laid out. Starts at __Main start__ (Left) to __main end__ (Right) side.
### Cross axis
The axis perpendicular to main axis is called cross-axis.

## Setup flex layout
### Install flex-layout
```posh
npm install --save @angular/flex-layout
```
### Import flex layout
Add following into module.ts
```posh
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    ...
    FlexLayoutModule
  ],
  declarations: []
})
```
