import { buildMockComponent } from '@core';
import component from './index.js';

describe('home component', () => {
    let $element;

    beforeEach(() => {
        const configure = ($provide) => {
            $provide.constant('Path', 'FAKE_PATH_FROM_TEST');
        };
        $element = buildMockComponent(component, configure)();
    });

    it('should render the component', () => {
        expect($element.html()).toContain('Home');
    });
});
