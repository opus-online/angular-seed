import { buildMockComponent } from 'opus-angular-seed-core';
import component from './index.js';

describe('home component', () => {
    let $element;
    const configure = ($filterProvider) => {
        $filterProvider.register('translate', () => (input) => input);
    };
    beforeEach(() => {
        $element = buildMockComponent(component, configure)();
    });
    it('should render the logo', () => {
        expect($element.find('img').attr('src')).toBe('/assets/logo.svg');
    });

    it('should render the title', () => {
        expect($element.find('h1').text()).toBe('Opus');
    });
});
