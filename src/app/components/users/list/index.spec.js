import { buildMockComponent } from '@core';
import component from './index.js';

describe('users list component', () => {
    let $element;

    beforeEach(() => {
        const configure = ($provide) => {
            $provide.constant('UserResource', 'FAKE USER RESOURCE');
        };
        $element = buildMockComponent(component, configure)({ items: [1, 2, 3] });
    });

    it('should render the component and show the total item count', () => {
        expect($element.html()).toContain('users list');
        expect($element.html()).toContain('total: 3');
    });
});
