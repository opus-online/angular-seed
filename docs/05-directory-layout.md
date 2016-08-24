# Directory Layout
```
scripts/                --> all your node scripts
    environement.js         --> exports all the enviromental variables defined in .env.example
    server.js               --> runs an express server that serves the application
src/                    --> all of the source files for the application
    components/             --> all your UI components
    configs/                --> all your application configuration settings (e.g. routing / translate)
    constants/              --> all your application constants
    enums/                  --> all your application enums
    factories/              --> all your application factories
    filters/                --> all your application filters
    layouts/                --> all your application layouts
    providers/              --> all your application providers (e.g. lodash)
    resources/              --> all your application resources
    runs/                   --> all your application runs
    services/               --> all your application services
    states/                 --> all your application services
    bootstrap.js            --> bootstraps your application elements. Entry point of your application
    index.ejs               --> index.html template
test/                   --> test configurations
    fixtures/               --> all your test fixtures
    bootstrap.tests.js      --> bootstraps all your tests
www/                    --> all your non-code files
    assets/                 --> all your web application assets (styles etc)
    languages/              --> all your translation files
```
##
