import { Component } from '@core';

@Component({
    template: `
        <h2>Home</h2>
        <h3>Environmental variable</h3>
        <pre>{{ vm.env | json }}</pre>
    `
})
export default class {
    constructor () {
        this.env = SEED_CORE.ENV;
    }
}
