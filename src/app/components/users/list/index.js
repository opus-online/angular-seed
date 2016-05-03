import { Component } from '@core';

@Component({
    bindings: {
        items: '='
    },
    template: `
        <h1>users list</h1>
        <p>total: {{ vm.items.length  }}</p>
    `
})
export default class {

}
