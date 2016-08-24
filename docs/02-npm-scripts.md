# NPM scripts

## Development scripts
|Command|Description|
|---|---|
|npm run dev|Runs webpack dev server and serves the development version of the site on localhost:PORT|
|npm run lint|Lints all your code in the src folder according to the [.eslintrc](../.eslintrc) configuration
|npm run test|Runs all your tests once|
|npm run test:watch|Watches your tests / source files for changes and re-runs the tests
|npm run extract|Extracts all your translations from your code and stores them in the [www/languages/](../www/languages/) folder

## Production scripts
|Command|Description|
|---|---|
|npm run build|Builds the site for production|
|npm run start|Runs npm run build && stars a node server that serves the WWW folder on localhost:PORT|
