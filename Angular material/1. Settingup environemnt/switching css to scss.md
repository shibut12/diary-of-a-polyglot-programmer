1. Open `angular-cli.json` file and update `defaults` section.
Before
```json
"defaults": {
    "styleExt": "css",
    "component": {}
  }
```
After
```json
"defaults": {
    "styleExt": "scss",
    "component": {}
  }
```
2. update `styles.css` section  to `styles.sass` in `styles` section
Before
```json
"styles": [
  "styles.css"
]
```
After
```json
"styles": [
  "styles.scss"
]
```
3. Rename `src/styles.css` file to `src/styles.scss`

4. Rename `app.component.css` to `app.component.scss`

5. Update `styleUrls` in `app.component.ts`
```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
}

```
6. Kill app on terminal and restart `ng serve`