<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
Content

- [Understanding components](#understanding-components)
  - [Example component `user-list` (index.js file contents)](#example-component-user-list-indexjs-file-contents)
  - [Autoloading](#autoloading)
- [Testing components](#testing-components)
  - [A simple component example](#a-simple-component-example)
  - [Mocking Component dependencies](#mocking-component-dependencies)
  - [Mocking Component filters](#mocking-component-filters)
  - [Providing data to Components via $scope](#providing-data-to-components-via-scope)
  - [Providing data to Components via dom attributes](#providing-data-to-components-via-dom-attributes)
  - [Accessing the component controller](#accessing-the-component-controller)
  - [Accessing the component scope](#accessing-the-component-scope)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Understanding components

* [Angular documentation](https://docs.angularjs.org/guide/component)

## Example component `user-list` (index.js file contents)

```javascript
import { Component } from '@core';

@Component({
     template: `
        <div class="panel">
            <h2>{{ 'User list' | translate }}</h2>
            <div class="inner table">
                <loader ng-if="vm.list.loading"></loader>
                <table>
                    <thead>
                        <tr>
                            <th>{{ 'Id' | translate }}</th>
                            <th>{{ 'Fullname' | translate }}</th>
                            <th>{{ 'Email' | translate }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr ng-repeat="item in vm.list.items">
                            <td>{{ item.id }}</td>
							<td>{{ item.fullName }}</td>
                            <td>{{ item.email }}</td>
                        </tr>
                    </tbody>
                </table>
                <table-paginator list="vm.list"></table-paginator>
            </div>
        </div>
    `
})
export default class {
    constructor (User, ListFactory) {
        this.list = ListFactory.createForResource(User);
        this.list.fetch();
    }
}
```

## Autoloading

|File path|Registered as (in Angular)|
|---|---|
|src/components/user/list/index.js|	userList (user-list in templates)|


# Testing components

## A simple component example

Component:

```javascript
import { Component } from '@core';

@Component({
    template: `
        <h2>Account settings</h2>
    `
})
export default class {
}
```

Test:

```Javascript
import { buildMockComponent } from '@core';
import component from './index.js';

describe('account settings component', () => {
    let $element;

    beforeEach(() => {
        $element = buildMockComponent(component)();
    });

    it('should render the account settings page', () => {
        expect($element.html()).toContain('Account settings');
    });
});
```

## Mocking Component dependencies

```javascript
$element = buildMockComponent(component, {
    $state: 'fakeState',
    $http: 'fakeHttp'
})();
```

## Mocking Component filters

```
const configure = ($provide, $filterProvider) => {
    $provide.constant('path', 'FAKE_PATH_FROM_TEST');
    $filterProvider.register('unixToDate', () => {
        return function (input) {
            return new Date(input * 1000);
        };
    });
};
$element = buildMockComponent(component, configure)();
```
List of custom providers: https://docs.angularjs.org/api/ng/provider

## Providing data to Components via $scope

Example scope bindings component:

```javascript

import { Component } from '@core';

@Component({
    bindings: {
        id: '=',
        name: '='
    },
    template: `
        <h2>users id {{ vm.id }}</h2>
        <h2>users name {{ vm.name }}</h2>
    `
})
export default class {
}
```
Example scope bindings component test:

```javascript
import { buildMockComponent } from '@core';
import component from './index.js';

describe('users detail component', () => {
    let $element;

    beforeEach(() => {
        $element = buildMockComponent(component)({ id: 12, name: 'Peeter' });
    });

    it('should render the component and show the user id and name', () => {
        expect($element.html()).toContain('users id 12');
        expect($element.html()).toContain('users name Peeter');
    });
});
```

## Providing data to Components via dom attributes

Example dom bindings component:

```javascript
import { Component } from '@core';

@Component({
    bindings: {
        name: '@'
    },
    template: `
        <h2>users name {{ vm.name }}</h2>
    `
})
export default class {
}
```
Example usage:
```html
<test name="Peeter"></test>
```

Example dom bindings component test:

```javascript

import { buildMockComponent } from '@core';
import component from './index.js';

describe('users detail component', () => {
    let $element;

    beforeEach(() => {
        $element = buildMockComponent(component)({}, { name: 'Peeter' });
    });

    it('should render the component and show the user id and name', () => {
        expect($element.html()).toContain('users name Peeter');
    });
});
```

## Accessing the component controller

```javascript
$element.controller('test');
```

## Accessing the component scope

```javascript
$element.scope()
```
