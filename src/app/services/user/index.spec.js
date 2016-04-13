import Service from './index.js';

describe('users service', () => {
    let userService;

    beforeEach(() => {
        userService = new Service('FAKE PATH');
    });

    it('should create the service', () => {
        expect(userService).toBeDefined();
    });
});

