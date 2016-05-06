import { buildMockComponent } from '@core';
import lodash from 'lodash';

import component from './index.js';

describe('home component', () => {
    let $element;

    beforeEach(() => {
        const configure = ($provide) => {
            $provide.constant('path', 'FAKE_PATH_FROM_TEST');
            $provide.constant('lodash', lodash);
            $provide.constant('USER_TYPE', { ACTIVE: 'ACTIVE' });
        };
        $element = buildMockComponent(component, configure)();
    });

    it('should render the component', () => {
        expect($element.html()).toContain('Home');
    });
});
