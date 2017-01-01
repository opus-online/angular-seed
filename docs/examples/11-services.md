<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
Content

- [Understanding services](#understanding-services)
  - [Example service (index.js file contents)](#example-service-indexjs-file-contents)
  - [Autoloading](#autoloading)
- [Testing services](#testing-services)
  - [A simple service example](#a-simple-service-example)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Understanding services

* [Angular documentation](https://docs.angularjs.org/guide/services)

## Example service (index.js file contents)

```javascript
export default class {
    /* @ngInject */
    constructor ($translate, toastr) {
        this.$translate = $translate;
        this.toastr = toastr;
    }
    recordAdded () {
        this.toastr.success(this.$translate.instant('general.Record added'));
    }
    recordUpdated () {
        this.toastr.success(this.$translate.instant('general.Record updated'));
    }
    recordDeleted () {
        this.toastr.success(this.$translate.instant('general.Record deleted'));
    }
}

```

## Autoloading

|File path|Registered as (in Angular)|
|---|---|
|src/services/toast/index.js|ToastService|


# Testing services

Services are just Javascript files that export a class.
Testing services is as simple as requiring the Service and new'ing it with the mocked dependencies.

## A simple service example

Service:

```javascript
export default class {

    constructor ($translate, toastr) {
        this.$translate = $translate;
        this.toastr = toastr;
    }
    recordAdded () {
        this.toastr.success(this.$translate.instant('general.Record added'));
    }
}
```

Test:

```javascript
import Service from './index.js';

describe('alert service', () => {
    let alertService;
    let $translate;
    let toastr;

    beforeEach(() => {
        $translate = { instant: jasmine.createSpy('$translate#instant').and.callFake((translation) => translation) };
        toastr = { success: jasmine.createSpy('toastr#success'), error: jasmine.createSpy('toastr#error') };
        alertService = new Service($translate, toastr);
    });

    describe('recordAdded', () => {
        it('should show a success toastr alert', () => {
            alertService.recordAdded();
            expect($translate.instant).toHaveBeenCalledWith('general.Record added');
            expect(toastr.success).toHaveBeenCalledWith('general.Record added');
        });
    });
});
```
