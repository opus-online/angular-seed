**opus-angular-seed**

This repository is a collection of best practices used in developing single page applications at [Opus Online](http://opusonline.co/)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
Content

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Clone opus-angular-seed](#clone-opus-angular-seed)
  - [Install Dependencies](#install-dependencies)
- [Running the application](#running-the-application)
  - [Development scripts](#development-scripts)
  - [Production scripts](#production-scripts)
- [Configuring the application](#configuring-the-application)
  - [Global variables](#global-variables)
  - [Configuring vendors](#configuring-vendors)
  - [Configuring angular dependencies](#configuring-angular-dependencies)
  - [Environmental settings](#environmental-settings)
    - [.env file](#env-file)
    - [.env.example.file](#envexamplefile)
    - [Example of using an environmental variable in a service](#example-of-using-an-environmental-variable-in-a-service)
    - [Defining the `PORT` variables](#defining-the-port-variables)
    - [Defining `BASIC_AUTH_USERNAME` / `BASIC_AUTH_PASSWORD` variables](#defining-basic_auth_username--basic_auth_password-variables)
    - [`production` vs `development` environment](#production-vs-development-environment)
      - [`production`](#production)
      - [`development`](#development)
- [Directory Layout](#directory-layout)
- [Autoloading](#autoloading)
- [Testing](#testing)
  - [Fixtures](#fixtures)
- [Translations](#translations)
  - [Usage in templates](#usage-in-templates)
  - [Usage in Javascript](#usage-in-javascript)
  - [Extracting messages](#extracting-messages)
  - [Variable replacement](#variable-replacement)
  - [MessageFormat (plural, gender etc)](#messageformat-plural-gender-etc)
  - [Gotcha's](#gotchas)
- [Githooks](#githooks)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Getting Started

To get you started you can simply clone the repository and install the dependencies.

## Prerequisites

* You need [git](http://git-scm.com/) to clone the repository
* You need [node + npm](http://nodejs.org/) to run the application / tests

## Clone opus-angular-seed

Clone the angular-seed repository using git:

```
git clone --depth=1 git@github.com:opus-online/angular-seed.git
cd angular-seed
```

## Install Dependencies

```
npm install
```

# Running the application

## Development scripts
|Command|Description|
|---|---|
|npm run dev|Runs webpack dev server and serves the development version of the site on localhost:PORT|
|npm run lint|Lints all your code in the src folder according to the [.eslintrc](.eslintrc) configuration
|npm run test|Runs all your tests once|
|npm run test:watch|Watches your tests / source files for changes and re-runs the tests
|npm run extract|Extracts all your translations from your code and stores them in the [www/languages/](www/languages/) folder

## Production scripts
|Command|Description|
|---|---|
|npm run build|Builds the site for production|
|npm run start|Runs npm run build && stars a node server that serves the WWW folder on localhost:PORT|

# Configuring the application

## Global variables

There's only one global variable named `SEED_CORE`. It's defined via [webpack.DefinePlugin](https://webpack.github.io/docs/list-of-plugins.html#defineplugin), which means it's not accessible through your developer console but can be read by your application.

## Configuring vendors

Open [package.json](package.json) and add a new key to the vendors array

|Key|Description|Globally available as|
|---|---|---|
|vendors|NPM packages that are automatically bundled as `vendor.bundle.js` and loaded before your application|`SEED_CORE.VENDORS`|

```json
{
  "name": "opus-angular-seed",
  "version": "0.0.1",
  "description": "An opinionanted angular 1.5 seed project",
  "main": "src/boostrap.js",
  "vendors": [
    "lodash",
    "angular",
    "angular-resource",
    "angular-ui-router",
    "angular-translate",
    "angular-translate-loader-static-files",
    "angular-translate-interpolation-messageformat"
  ]
}
```


## Configuring angular dependencies

Open [package.json](package.json) and add a new key to the angularDependencies array



|Key|Description|Globally available as|
|---|---|---|
|angularDependencies|Dependencies that are registered when creating the angular application.|`SEED_CORE.DEPENDENCIES.ANGULAR`|

```json
{
  "name": "opus-angular-seed",
  "version": "0.0.1",
  "description": "An opinionanted angular 1.5 seed project",
  "main": "src/boostrap.js",
  "angularDependencies": [
    "ui.router",
    "ngResource",
    "pascalprecht.translate"
  ]
}

```

```javascript
const application = angular.module('app', SEED_CORE.DEPENDENCIES.ANGULAR);
```


## Environmental settings

Copy and paste the .env.example file and rename it to .env.
All keys present in the .env.example file need to be defined in the .env file. They can be empty, but they have to be defined.
All variables will be available via the global variable `SEED_CORE.ENV` in your angular application.

### .env file

```bash
NODE_ENV=production
```

### .env.example.file
```
NODE_ENV=development
```

### Example of using an environmental variable in a service

```
export default class {
    constructor () {
        console.log(`env ${SEED_CORE.ENV.NODE_ENV}`);
    }
}
```

### Defining the `PORT` variables

Define the `PORT` variable in your `.env` file. This is the port your application will be served on (either via `npm start` or via `npm run dev`)

```
PORT=8080
```

### Defining `BASIC_AUTH_USERNAME` / `BASIC_AUTH_PASSWORD` variables

Define the variables in your .env file. These can be left empty if you do not wish to protect your site with a username & password. **Only applies to `npm start`**

### `production` vs `development` environment
#### `production`
- Automatically minifies javascript

#### `development`
- Enables SEED_CORE debugging in Developer tools
    - ![Developer tools](http://puu.sh/qMTeL/2d396de792.png)
- Enables source maps
- Adds an eslint preloader that shows your code style errors in Developer tools
    - ![Developer tools](http://puu.sh/qMVbm/47dcd798bc.png)

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
# Autoloading

All elements in the `src/` folder are autoloaded and registered with Angular.

|Type|File path|Registered as (in Angular)|
|---|---|---|
|[Component](docs/examples/01-components.md)|src/components/user/list/index.js|	userList (user-list in templates)|
|[Configs](docs/examples/02-configs.md)|src/configs/routing/index.js|N/A (these are just functions ran at config time)|
|[Constants](docs/examples/03-constants.md)|src/constants/userType/index.js|USER_TYPE|
|[Enums](docs/examples/04-enums.md)|src/enums/user/type/index.js|USER_TYPE_ENUM|
|[Factories](docs/examples/05-factories.md)|src/factories/user/index.js|UserFactory|
|[Filters](docs/examples/06-filters.md)|src/filters/dateTime/index.js|dateTime|
|[Layouts](docs/examples/07-layouts.md)|src/layouts/application/index.js|ApplicationLayout|
|[Providers](docs/examples/08-providers.md)|src/providers/lodash/index.js|lodash (lodashProvider to configure)|
|[Resources](docs/examples/09-resources.md)|src/resources/user/index.js|UserResource|
|[Runs](docs/examples/10-runs.md)|src/runs/user/index.js|N/A (these are just functions ran at run time)|
|[Services](docs/examples/11-services.md)|src/services/toast/index.js|ToastService|
|[States](docs/examples/12-states.md)|src/states/user/home/index.js|user.home (states/user/index.js state needs to exist)|

# Testing

We generally try to keep all logic within 4 types of elements. Here's a list of them and examples how to write tests for them:

* [Component](docs/examples/01-components.md)
* [Factories](docs/examples/05-factories.md)
* [Filters](docs/examples/06-filters.md)
* [Services](docs/examples/11-services.md)

## Fixtures

Fixtures are automatically loaded from `test/fixtures/` folder and are available in tests via the global variable `$FIXTURES`

Example fixture `test/fixtures/users/peeter.js`

```javascript
export default {
    id: 12,
    name: 'Peeter'
};
```

Using in tests:

```javascript
console.log($fixtures['users/peeter']); // { id: 12, name: 'Peeter' }
```

# Translations

We use [angular-translate](https://angular-translate.github.io/) to translate our applications

## Usage in templates

Angular translate provides an angular filter called translate. Example:

```html
<b>{{ 'TRANSLATE_STRING' | translate }}</b>
```

You can also pass in variables to the translate string
```html
{{ 'TRANSLATE_STRING' | translate:{count:10} }}
```
## Usage in Javascript

Angular translate provides an angular service called $translate. Example:

```javascript
export default class {
    constructor ($translate) {
        console.log($translate.instant('TRANSLATE_STRING'));
    }
}
```

You can also pass in variables to the translate string

```javascript
export default class {
    constructor ($translate) {
        console.log($translate.instant('TRANSLATE_STRING'), { count : 10 });
    }
}
```

## Extracting messages

The npm command `extract` will find all your translations and store them at the "www/languages/" folder. An example file:

```json
{
    "TRANSLATE_STRING": "The string that will be shown in the UI"
}
```

## Variable replacement

Since we use [angular-translate-interpolation-messageformat](https://angular-translate.github.io/docs/#/guide/14_pluralization) all variables you pass need use single brackets instead of double.

```json
{
    "TRANSLATE_STRING": "The string that will be shown in the UI, count: { count }"
}
```

## MessageFormat (plural, gender etc)

You can use the messageformat extension in your translations. For example:

```json

{
    "TRANSLATE_STRING": "{count, plural, one {# unit} other {# units}}"
}
```

will render either "10 units" or "1 unit", depending on the count you pass along.

## Gotcha's

The application layout will block rendering the UI until translations have loaded @[src/layouts/application/index.js](src/layouts/application/index.js)
This is because otherwise ENUM labels will not be translated.

# Githooks

We use the plugin https://github.com/typicode/husky/ to manage githooks. Husky supports all git hooks (https://git-scm.com/docs/githooks). Simply add the corresponding npm script to your [package.json](package.json).
