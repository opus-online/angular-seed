import lodash from 'lodash';
import { buildComponentConfig } from './registry.js';

export const buildMockComponent = (component, configure = () => {}, mockModuleName = 'test', mockComponentName = 'test') => {

    let compileComponent;

    angular.module(mockModuleName, []).component(mockComponentName, buildComponentConfig(component));
    angular.mock.module(mockModuleName, configure);
    angular.mock.inject(($injector) => {

        let $scope = $injector.get('$rootScope').$new(true);
        compileComponent = (scopeAttributes = {}, domAttributes = {}) => {

            /**
             * Map over to the scope object
             */
            Object.keys(scopeAttributes).forEach((key) => {
                $scope[key] = scopeAttributes[key];
            });

            const scopeAttrs = Object.keys(scopeAttributes)
                .map((key) => {
                    return {
                        key : lodash.kebabCase(key),
                        value : key
                    };
                });

            const domAttrs = Object.keys(domAttributes).map((key) => {
                return {
                    key : lodash.kebabCase(key),
                    value : domAttributes[key]
                };
            });

            const attributes = [].concat(scopeAttrs, domAttrs).map((attr) => {
                return attr.key + '=\'' + attr.value + '\'';
            }).join(' ');

            const $element = $injector.get('$compile')(angular.element(`<${mockComponentName} ${attributes}></${mockComponentName}>`))($scope);
            $scope.$digest();
            return $element;
        };
    });
    return compileComponent;
};
