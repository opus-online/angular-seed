import { Component } from '@core';

@Component({
    bindings : {
        items : '='
    },
    template : `
        <h1>users list</h1>
        <p>total: {{ vm.items.length  }}</p>
    `,
    controllerAs : 'sup'
})
export default class {

    constructor (UserResource) {
        console.log('UserListComponent', UserResource);
    }

}
