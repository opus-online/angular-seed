import lodash from 'lodash';

const ENUMS = {
    COMPONENT : 'Core.Component'
};
/**
 * Creates a decorator that extends the prototype with a specific field
 * Copies the attributes passed to the field.
 * @param field
 * @returns {Function}
 */
const createDecorator = function (field) {
    return (options) => {
        return (target) => {
            lodash.set(target.prototype, field, options);
        }
    }
};
/**
 * Gets the decorated prototype value of target
 * @param target
 * @param value
 * @returns {Object}
 */
const getDecoratorValue = (target, value) => {
    return _.extend({}, lodash.get(target.prototype, value));
};

const splitPathToFolders = (path) => {
    const pathWithFilename = path.substring(2).substring(-3);
    const index = pathWithFilename.lastIndexOf('/');
    return pathWithFilename.substring(0, index).split('/');
};

const resolveFileName = (path) => {
    const indexOfSlash = path.lastIndexOf('/');
    const indexOfDot = path.lastIndexOf('.');
    return path.substring(indexOfSlash + 1, indexOfDot);
};

const resolveFullName = (path) => {
    return lodash.upperFirst(lodash.camelCase([...splitPathToFolders(path), resolveFileName(path)].join('-')));
};

export const registerStates = (context, { application, warn, debug }) => {

    context.keys()
        .sort((path1, path2) => {
            return path1.length - path2.length;
        })
        .forEach((path) => {

            const folders = splitPathToFolders(path);
            const stateName = folders.join('.');
            const stateConfig = context(path).default;

            if (resolveFileName(path) != 'state') {
                warn(`State '${stateName}' should be in a file named 'state.js' by convention.`);
            }

            if (stateConfig.parent !== undefined && folders.length > 1) {
                var parent = folders[folders.length - 2];
                warn(`State '${stateName}' has a parent property while already belonging to the parent state '${parent}'. This is probably an error.`);
            }
            if (stateConfig.template === undefined) {
                warn(`State '${stateName}' does not have a template. This is probably an error.`);
            }

            //default values, best practices
            stateConfig.controller = stateConfig.controller || function () {};
            stateConfig.controllerAs = 'vm';

            application.config($stateProvider => {
                debug(`Registering State '${stateName}'`);
                $stateProvider.state(stateName, stateConfig);
            });

        });
};

export const registerLayouts = (context, { application, warn, debug }) => {
    context.keys()
        .forEach((path) => {

            const layoutName = resolveFullName(path);
            const layoutConfig = context(path).default;

            if (resolveFileName(path) != 'layout') {
                warn(`Layout '${layoutName}' should be in a file named 'layout.js' by convention.`);
            }
            if (layoutConfig.controllerAs !== undefined) {
                warn(`Layout '${layoutName}' has a controllerAs attribute. This will be overwritten to 'vm'.`);
            }
            if (layoutConfig.abstract !== undefined) {
                warn(`Layout '${layoutName}' will be forced to abstract.`);
            }
            if (layoutConfig.url !== undefined) {
                warn(`Layout '${layoutName}' has an url property. This is probably an error.`);
            }
            if (layoutConfig.template === undefined) {
                warn(`Layout '${layoutName}' does not have a template property. This is probably an error.`);
            }
            //default values, best practices
            layoutConfig.abstract = true;
            layoutConfig.controllerAs = 'vm';

            application.config($stateProvider => {
                debug(`Registering Layout '${layoutName}'`);
                $stateProvider.state(layoutName, layoutConfig);
            });
        });
};

export const registerComponents = (context, { application, prefix = '', warn, debug }) => {

    context.keys().forEach((path) => {

        const componentName = prefix + lodash.camelCase(splitPathToFolders(path).join('-'));
        const componentPrettyName = lodash.kebabCase(componentName);
        const componentController = context(path).default;
        const componentConfig = getDecoratorValue(componentController, ENUMS.COMPONENT);

        if (resolveFileName(path) != 'component') {
            warn(`Component '${componentPrettyName}' should be in a file named 'component.js' by convention.`);
        }
        if (componentConfig.controller !== undefined) {
            warn(`Component '${componentName}' has a controller attribute. This will be overwritten.`);
        }
        if (componentConfig.controllerAs !== undefined) {
            warn(`Component '${componentName}' has a controllerAs attribute. This will be overwritten to 'vm'.`);
        }

        componentConfig.controller = componentController;
        //default values, best practices
        componentConfig.controllerAs = 'vm';

        debug(`Registering Component '${componentPrettyName}'`);
        application.component(componentName, componentConfig);
    });
};


/**
 * Creates a registry that builds the name from folders
 * @param type - the angular type we're registering
 * @param fileNameConvention - what should the file by named
 * @returns {Function}
 */
const createFolderNameRegistry = (type, fileNameConvention, fileNameReducers = []) => {

    return (context, { application, warn, debug }) => {
        context
            .keys()
            .forEach((path) => {

                const prettyType = lodash.upperFirst(type);
                const fileName = resolveFileName(path);
                const originalName = resolveFullName(path);
                const reducedName = fileNameReducers.reduce((original, reducer) => reducer(original), originalName);
                const value = context(path).default;

                if (fileName != fileNameConvention) {
                    warn(`${prettyType} '${originalName}' should be in a file named '${fileNameConvention}.js' by convention.`);
                }
                debug(`Registering ${prettyType} '${originalName}' with reduced name '${reducedName}'`);

                if (reducedName === false) {
                    application[type](value);
                }
                else {
                    application[type](reducedName, value);

                }

            });
    };
};


/**
 * Component decorator
 * @type {Function}
 */
export const Component = createDecorator(ENUMS.COMPONENT);

const removeName = (name) => false;
const removeNameSuffix = (suffix) => (name) => name.substring(0, name.length - suffix.length);

export const registerProviders = createFolderNameRegistry('provider', 'provider', [removeNameSuffix('provider')]);
export const registerRuns = createFolderNameRegistry('run', 'run', [removeName]);
export const registerConfigs = createFolderNameRegistry('config', 'config', [removeName]);

export const registerFilters = createFolderNameRegistry('filter', 'filter', [removeNameSuffix('filter'), lodash.camelCase]);
export const registerFactories = createFolderNameRegistry('factory', 'factory');
export const registerServices = createFolderNameRegistry('service', 'service');
export const registerResources = createFolderNameRegistry('service', 'resource');
