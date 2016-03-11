import { registerComponents, registerConfigs, registerRuns, registerLayouts, registerStates, registerProviders, registerResources, registerFactories, registerServices, registerFilters } from '@core';

const error = (...args) => {
    if (SEED_CORE.DEVELOPMENT) {
        console.error.apply(console, ['[OPUS-SEED]', ...args]);
    }
};
const info = (...args) => {
    if (SEED_CORE.DEVELOPMENT) {
        console.info.apply(console, ['[OPUS-SEED]', ...args]);
    }
};
const warn = (...args) => {
    if (SEED_CORE.DEVELOPMENT) {
        console.warn.apply(console, ['[OPUS-SEED]', ...args]);
    }
};
const debug = (...args) => {
    if (SEED_CORE.DEBUG) {
        console.debug.apply(console, ['[OPUS-SEED]', ...args]);
    }
};

const prefix = '';
const application = angular.module('app', SEED_CORE.DEPENDENCIES.ANGULAR);
const options = { application, prefix, info, warn, debug, error };

/**
 * Register configuration stuff
 */
registerConfigs(require.context('./configuration/configs', true, /.js/), options);
registerLayouts(require.context('./configuration/layouts', true, /.js/), options);
registerStates(require.context('./configuration/states', true, /.js/), options);

/**
 * Register application stuff
 */
registerComponents(require.context('./app/components', true, /.js/),  options);
registerResources(require.context('./app/resources', true, /.js/), options);
registerFactories(require.context('./app/factories', true, /.js/), options);
registerServices(require.context('./app/services', true, /.js/), options);
registerFilters(require.context('./app/filters', true, /.js/), options);
registerProviders(require.context('./app/providers', true, /.js/), options);

/**
 * Register run stuff
 */
registerRuns(require.context('./runs', true, /.js/), options);

try {
    angular.bootstrap(document, [application.name]);
}
catch (e) {
    warn(`Creating angular application failed. Check your dependencies and vendors`);
    info(`Angular module name: `, application.name);
    info(`Angular dependencies (package.json field 'angularDependencies'): `, SEED_CORE.DEPENDENCIES.ANGULAR);
    info(`Vendors (package.json field 'vendors'): `, SEED_CORE.VENDORS);
    throw e;
}
