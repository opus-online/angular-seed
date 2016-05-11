window.jQuery = require('jquery');
require('angular');
require('angular-mocks');

window.$fixtures = {};

const fixturesContext = require.context('./fixtures', true, /.js$/);
fixturesContext.keys().forEach((path) => {
    const parsedPath = path.substr(2, path.length).substring(0, path.length - 5);
    const value = fixturesContext(path).default;
    window.$fixtures[parsedPath] = value;
});

const testsContext = require.context('./app', true, /.spec\.js$/);
testsContext.keys().forEach(testsContext);
