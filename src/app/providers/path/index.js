export default class {

    constructor ($qProvider) {
        console.log('getting path provider', $qProvider);
    }

    $get () {
        return {
            id: 12,
            name: 'Path Object or something'
        };
    }

}
