import { Component } from '@core';

@Component({
    bindings: {
        name: '='
    },
    template: `
        <h2>users name {{ vm.name }}</h2>
    `
})
export default class {
}
