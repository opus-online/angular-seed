import { Component } from '@core';

@Component({
    bindings : {
        'id' : '=',
        'name' : '@'
    },
    template : `
        <h2>users id {{ vm.id }}</h2>
        <h2>users name {{ vm.name }}</h2>
        <p>{{ 1457651361 | unixToDate | date }}</p>
    `
})
export default class  {

    constructor (Path) {
        console.log('UsersDetailComponent', Path);
    }

}
