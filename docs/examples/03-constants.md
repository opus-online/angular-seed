<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
Content

- [Understanding constants](#understanding-constants)
  - [Example constant (index.js file contents)](#example-constant-indexjs-file-contents)
  - [Autoloading](#autoloading)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

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
