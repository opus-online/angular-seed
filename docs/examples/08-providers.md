# Understanding providers

* [Angular documentation](https://docs.angularjs.org/guide/providers)
* We typically use providers to register 3rd party scripts with Angulars DI.

## Example provider (index.js file contents)

```
import lodash from 'lodash';

export default class {

    $get () {
        return lodash;
    }

}

```

## Autoloading

|File path|Registered as (in Angular)|
|---|---|
|src/providers/lodash/index.js|lodash (lodashProvider to configure)|
