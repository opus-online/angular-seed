import lodash from 'lodash';

import { createPrototypeDecorator, ENUMS } from './core/decorators.js';
import { createFolderNameRegistry, buildComponentConfig } from './core/registry.js';
import { buildNameFromPath, addNameSuffix } from './core/transformers.js';
import { indexFileValidator, layoutConfigurationValidator, stateConfigurationValidator, componentConfigurationValidator } from './core/validators.js';
import { buildMockComponent as testingMockComponent } from './core/testing.js';

/**
 * Component decorator
 * @type {Function}
 */
export const Component = createPrototypeDecorator(ENUMS.COMPONENT);

export const registerComponents = createFolderNameRegistry(
    'Component',
    [buildNameFromPath, lodash.lowerFirst],
    [indexFileValidator, componentConfigurationValidator],
    (application, name, component) => application.component(name, buildComponentConfig(component))
);

export const registerProviders = createFolderNameRegistry(
    'Provider',
    [buildNameFromPath, lodash.lowerFirst],
    [indexFileValidator],
    (application, name, value) => application.provider(name, value)
);

export const registerDirectives = createFolderNameRegistry(
    'Directive',
    [buildNameFromPath, lodash.lowerFirst],
    [indexFileValidator],
    (application, name, value) => application.directive(name, value)
);

export const registerRuns = createFolderNameRegistry(
    'Run',
    [() => 'N/A'],
    [indexFileValidator],
    (application, name, value) => application.run(value)
);

export const registerConstants = createFolderNameRegistry(
    'Constant',
    [buildNameFromPath, lodash.snakeCase, lodash.toUpper],
    [indexFileValidator],
    (application, name, value) => application.constant(name, value)
);

export const registerConfigs = createFolderNameRegistry(
    'Config',
    [() => 'N/A'],
    [indexFileValidator],
    (application, name, value) => application.config(value)
);

export const registerLayouts = createFolderNameRegistry(
    'Layout',
    [buildNameFromPath, addNameSuffix('Layout')],
    [indexFileValidator, layoutConfigurationValidator],
    (application, name, value) => application.config($stateProvider => $stateProvider.state(name, value))
);

export const registerStates = createFolderNameRegistry(
    'State',
    [buildNameFromPath, lodash.snakeCase, (name) => name.replace(new RegExp('_', 'g'), '.').toLowerCase()],
    [indexFileValidator, stateConfigurationValidator],
    (application, name, value) => application.config($stateProvider => $stateProvider.state(name, value))
);

export const registerFilters = createFolderNameRegistry(
    'Filter',
    [buildNameFromPath, lodash.camelCase],
    [indexFileValidator],
    (application, name, value) => application.filter(name, value)
);

export const registerFactories = createFolderNameRegistry(
    'Factory',
    [buildNameFromPath, addNameSuffix('Factory')],
    [indexFileValidator],
    (application, name, value) => application.factory(name, value)
);

export const registerServices = createFolderNameRegistry(
    'Service',
    [buildNameFromPath, addNameSuffix('Service')],
    [indexFileValidator],
    (application, name, value) => application.service(name, value)
);

export const registerResources = createFolderNameRegistry(
    'Resource',
    [buildNameFromPath, addNameSuffix('Resource')],
    [indexFileValidator],
    (application, name, value) => application.service(name, value)
);

/**
 *
 * @type {Function}
 */
export const buildMockComponent = testingMockComponent;
