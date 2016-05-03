export default class {

    constructor (Path) {
        if (SEED_CORE.ENV.NODE_ENV === 'production') {
            console.log('in production mode');
        }
        console.log('service initialized with path', Path);
    }

}
