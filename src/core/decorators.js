import lodash from 'lodash';

export const ENUMS = {
    COMPONENT: 'Core.Component'
};
export const createPrototypeDecorator = (key) => (options) => (target) => {
    lodash.set(target.prototype, key, options);
};
export const getPrototypeDecoratorValue = (target, key) => lodash.extend({}, lodash.get(target.prototype, key));
