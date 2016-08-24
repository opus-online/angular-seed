# Understanding constants

* [Angular documentation](https://docs.angularjs.org/api/auto/service/$provide#constant)

## Example constant (index.js file contents)

```
export default SEED_CORE.ENV.NODE_ENV === 'development';
```

## Autoloading

|File path|Registered as (in Angular)|
|---|---|
|src/constants/userType/index.js|USER_TYPE|
