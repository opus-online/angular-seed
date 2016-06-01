import { Component } from '@core';

@Component({
    template: `
        <h1 class="centered" style="height: 30%;">{{ 'Opus' | translate }}</h1>
        <img class="centered" style="height: 100%; width: 100%;" src="/assets/logo.svg">
    `
})
export default class {
}
