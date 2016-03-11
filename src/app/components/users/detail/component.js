import { Component } from '@core';

@Component({
    bindings : {},
    template : `
        <h1>users detail</h1>
        <p>{{ 1457651361 | unixToDate | date }}</p>
    `
})
export default class  {

    constructor ($http, Path) {
        console.log('UsersDetailComponent', Path);
    }

}
