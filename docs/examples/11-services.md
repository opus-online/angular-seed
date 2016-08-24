# Understanding services

* [Angular documentation](https://docs.angularjs.org/guide/services)

## Example service (index.js file contents)

```
export default class {

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
