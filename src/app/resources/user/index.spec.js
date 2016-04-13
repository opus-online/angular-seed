import Resource from './index.js';

describe('user resource', () => {
    let userResource;

    beforeEach(() => {
        userResource = new Resource('FAKE $RESOURCE');
    });

    it('should create the service', () => {
        expect(userResource).toBeDefined();
    });
});

