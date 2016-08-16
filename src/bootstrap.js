import { registerComponents, registerConfigs, registerRuns, registerLayouts, registerStates, registerConstants, registerEnums,
    registerProviders, registerResources, registerFactories, registerServices, registerFilters } from 'opus-angular-seed-core';

const startRegistering = () => {
    if (SEED_CORE.ENV.NODE_ENV === 'development') {
        console.groupCollapsed('opus-angular-seed registering application elements');
    }
};
const endRegistering = () => {
    if (SEED_CORE.ENV.NODE_ENV === 'development') {
        console.groupEnd();
    }
};
const error = (...args) => {
    if (SEED_CORE.ENV.NODE_ENV === 'development') {
        console.error.apply(console, args);
    }
};
const info = (...args) => {
    if (SEED_CORE.ENV.NODE_ENV === 'development') {
        console.info.apply(console, args);
    }
};
const warn = (...args) => {
    if (SEED_CORE.ENV.NODE_ENV === 'development') {
        console.warn.apply(console, args);
    }
};
const debug = (...args) => {
    if (SEED_CORE.ENV.NODE_ENV === 'development') {
        console.debug.apply(console, args);
    }
};

const prefix = '';
const application = angular.module('app', SEED_CORE.DEPENDENCIES.ANGULAR);
const options = { application, prefix, info, warn, debug, error };

startRegistering();

/**
 * Register configuration stuff
 */
registerConfigs(require.context('./configs', true, /index.js/), options);
registerLayouts(require.context('./layouts', true, /index.js/), options);
registerStates(require.context('./states', true, /index.js/), options);
registerConstants(require.context('./constants', true, /index.js/), options);
/**
 * Register application stuff
 */
registerComponents(require.context('./components', true, /index.js/), options);
registerResources(require.context('./resources', true, /index.js/), options);
registerFactories(require.context('./factories', true, /index.js/), options);
registerServices(require.context('./services', true, /index.js/), options);
registerFilters(require.context('./filters', true, /index.js/), options);
registerProviders(require.context('./providers', true, /index.js/), options);
registerEnums(require.context('./enums', true, /index.js/), options);

/**
 * Register run stuff
 */
registerRuns(require.context('./runs', true, /index.js/), options);

endRegistering();

try {
    angular.bootstrap(document, [application.name]);
}
catch (e) {
    warn('Creating angular application failed. Check your dependencies and vendors');
    info(`Angular module name: ${application.name}`);
    info(`Angular dependencies (package.json field 'angularDependencies'): ${SEED_CORE.DEPENDENCIES.ANGULAR}`);
    info(`Vendors (package.json field 'vendors'): ${SEED_CORE.VENDORS}`);
    throw e;
}
