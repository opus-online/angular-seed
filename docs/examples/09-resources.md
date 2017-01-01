<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
Content

- [Understanding resources](#understanding-resources)
  - [Example resource (index.js file contents)](#example-resource-indexjs-file-contents)
  - [Autoloading](#autoloading)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Understanding resources

* [Angular documentation](https://docs.angularjs.org/api/ngResource/service/$resource)

## Example resource (index.js file contents)

```javascript
/* @ngInject */
export default ($resource) => $resource('/user/:id');
```

## Autoloading

|File path|Registered as (in Angular)|
|---|---|
|src/resources/user/index.js|UserResource|
