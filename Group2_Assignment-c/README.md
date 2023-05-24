# MyNewApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.2.
# Steps
Useful link - [https://www.tutorialsteacher.com/angular/install-angular](https://www.tutorialsteacher.com/angular/install-angular)

1. Angular requires a current, active LTS (long-term support) or maintenance LTS version of Node.js and NPM. Install Node.js from [https://nodejs.org/](https://nodejs.org/). It will automatically install NPM - Node Package Manager.

2. Install Angular CLI:
'npm install -g @angular/cli@latest'
Angular CLI is required to create an Angular 2 application.

3. To create a new project:
- Open the command prompt or terminal and navigate to the folder where you want to create the new project.
- Run the following command:
  ```
  ng new project-name
  ```
  Replace `project-name` with the desired name for your project. Press ENTER to create the project. This will generate the directory structure for your Angular project.

4. Modify `app.module.ts` for the form application:
- Open the file `src/app/app.module.ts` in your code editor.
- Add the necessary imports and modifications:
  ```typescript
  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { AppRoutingModule } from './app-routing.module';
  import { AppComponent } from './app.component';
  import { FormsModule } from '@angular/forms';

  @NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
  ```

5. Open `app.component.html`:
- Write the HTML code for the form. Here's a representative code snippet (modify it for multiple inputs):
  ```html
  <h1>Simple Form</h1>
  <form #simpleForm="ngForm" (ngSubmit)="getValues(simpleForm.value)">
    <input type="text" ngModel name="user" placeholder="Enter Name"><br><br>
    <input type="text" ngModel name="age" placeholder="Enter age"><br><br>
    <input type="text" ngModel name="city" placeholder="Enter city"><br><br>
    <button>Get user value</button>
  </form>
  ```

6. Make changes in `app.component.ts`:
- Open the file `src/app/app.component.ts`.
- Update the code as follows:
  ```typescript
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    title = 'AngProj1';

    getValues(val: any) {
      console.log(val);
    }
  }
  ```
The `getValues()` function is defined here, which is called in the form to display the values in the console.

7. Build the application:
- Use the Angular CLI command `ng serve -o` to build the application. The `-o` flag opens it automatically in the default browser.
- Alternatively, you can use the NPM command `npm start` to build the application.
- Visit [http://localhost:4200](http://localhost:4200) to see the application's home page.

8. To send the form contents from the console to another page, open the terminal in VS Code from the menu `Terminal -> New Terminal`. Then, type the `ng serve -o` command and press ENTER.

Based on the above implementation, you


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
