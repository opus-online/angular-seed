import lodash from 'lodash';

import { resolveFileName } from './path.js';
import { getPrototypeDecoratorValue, ENUMS } from './decorators.js';

/**
 * Checks if the file is named index.js
 */
export const indexFileValidator = ({ path }, { warn }) => {
    if (resolveFileName(path) != 'index') {
        warn(`${path} should be in a file index.js by convention.`);
    }
};

/**
 * Layout specific validator
 * @param name
 * @param value
 * @param warn
 */
export const layoutConfigurationValidator = ({ name, value }, { warn}) => {
    if (value.controller !== undefined) {
        warn(`Layout '${name}' has a controller attribute. This is probably an error.`);
    }
    if (value.controllerAs !== undefined) {
        warn(`Layout '${name}' has a controllerAs attribute. This is probably an error.`);
    }
    if (value.abstract !== undefined) {
        warn(`Layout '${name}' will be forced to abstract.`);
    }
    if (value.url !== undefined) {
        warn(`Layout '${name}' has an url property. This is probably an error.`);
    }
    if (value.template === undefined) {
        warn(`Layout '${name}' does not have a template property. This is probably an error.`);
    }
};

/**
 * State specific validator.
 * @param name
 * @param value
 * @param warn
 */
export const stateConfigurationValidator = ({ name, value }, { warn }) => {

    const state = name.split('.');

    if (value.parent !== undefined && state.length > 1) {
        const parent = state[state.length - 2];
        warn(`State '${name}' has a parent property while already belonging to the parent state '${parent}'. This is probably an error.`);
    }
    if (value.template === undefined) {
        warn(`State '${name}' does not have a template. This is probably an error.`);
    }
};

export const componentConfigurationValidator = ({ name, value }, { warn }) => {

    const config = getPrototypeDecoratorValue(value, ENUMS.COMPONENT);
    const prettyName = lodash.kebabCase(name);

    if (config.controller !== undefined) {
        warn(`Component '${prettyName}' has a controller property. This will be overwritten.`);
    }
    if (config.controllerAs !== undefined) {
        warn(`Component '${prettyName}' has a controllerAs property. This will be overwritten to 'vm'.`);
    }
    if (config.template === undefined) {
        warn(`Component '${prettyName}' does not have a template property. This is probably an error.`);
    }
};


