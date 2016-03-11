import { Component } from '@core';

@Component({
    bindings : {},
    template : `<h1>users list</h1>`
})
export default class {

    constructor (UserResource) {
        console.log('UserListComponent', UserResource);
    }

}
