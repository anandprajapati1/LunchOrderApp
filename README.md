# LunchOrderApp
This application is based on popular Angular 2. Here we'll be using angular 2 with Typescript.
However in this example, We have implemented basic CRUD operations using REST services hosted on node server. 

## Pre-requisites
Node and npm should be installed. Since all code is done in typescript, so typescript compiler must be installed as well.
Also, **since we are gonna use REST services, so first we have to set that up locally. For that, please use [this repository](https://github.com/anandprajapati1/CRUD-operation-using-mongo-node). 
Just follow simple steps given and you are all set!**

## Getting Started
### Installing packages
Clone repository and run following command in command prompt/terminal(in root folder).
```
npm install
```
This will install dependencies in your local application environment.
Now set service base url into **app.service.ts**. Eg-
```
private baseUrl = 'http://localhost:3000';
```

### Run in Browser
Run following command in command prompt/terminal(in root folder)
```
npm start
```
This will start application and run in browser on default port 3001. And thats all!


## Further help
### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.



Thanks!
