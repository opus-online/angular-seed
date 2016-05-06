import { buildMockComponent } from '@core';
import component from './index.js';

describe('users detail component', () => {
    let $element;

    beforeEach(() => {
        const configure = ($provide, $filterProvider) => {
            $provide.constant('path', 'FAKE_PATH_FROM_TEST');
            $filterProvider.register('unixToDate', () => {
                return function (input) {
                    return new Date(input * 1000);
                };
            });
        };
        $element = buildMockComponent(component, configure)($fixtures['users/peeter']);
    });

    it('should render the component and show the user id and name', () => {
        expect($element.html()).toContain('users id 12');
        expect($element.html()).toContain('users name Peeter');
    });
});
