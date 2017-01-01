<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
Content

- [Understanding states](#understanding-states)
  - [Example state (index.js file contents)](#example-state-indexjs-file-contents)
  - [Autoloading](#autoloading)
  - [Example state using resolve](#example-state-using-resolve)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Understanding states

* [UI Router documentation](https://github.com/angular-ui/ui-router/tree/legacy)

## Example state (index.js file contents)

```
export default {
    url: '/home',
    template: '<home/>'
};
```

## Autoloading

|File path|Registered as (in Angular)|
|---|---|
|src/states/user/home/index.js|user.home (states/user/index.js state needs to exist)|

## Example state using resolve
State content

```js
export default {
    url: '/profile/:id',
    template: '<profile user="$resolve.user"></profile>',
    resolve: {
        /* @ngInject */
        user($stateParams, $q, $timeout) {
            return $q((resolve, reject) => {
                $timeout(() => {
                    resolve({
                        id: $stateParams.id,
                        fullName: 'John Doe',
                        email: `john.doe${$stateParams.id}@example.com`
                    });
                }, 500);
            });
        }
    }
};
```
Component content

```js
import { Component } from 'opus-angular-seed-core';

@Component({
    template: `
    <table class="user-info">
        <tbody>
            <tr>
                <td>'Id' | translate</td><td>{{ vm.user.id }}</td>
            </tr>
            <tr>
                <td>'Fullname' | translate</td><td>{{ vm.user.fullName }}</td>
            </tr>
            <tr>
                <td>'Email' | translate</td><td>{{ vm.user.email }}</td>
            </tr>
        </tbody>
    </table>
    `,
    bindings: {
        user: '='
    }
})

export default class {
};
```
