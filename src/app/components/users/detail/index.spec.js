import { buildMockComponent } from '@core';
import component from './index.js';

describe('users detail component', () => {
    let $element;

    beforeEach(() => {
        $element = buildMockComponent(component)($fixtures['users/peeter']);
    });

    it('should render the component and show the users name', () => {
        expect($element.html()).toContain('users name Peeter');
    });
});
