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

