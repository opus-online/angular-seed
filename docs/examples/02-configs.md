<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Contents**

- [Understanding configs](#markdown-header-understanding-configs)
    - [Example config block (index.js file contents)](#markdown-header-example-config-block-indexjs-file-contents)
    - [Autoloading](#markdown-header-autoloading)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Understanding configs

* [Angular documentation](https://docs.angularjs.org/guide/module#configuration-blocks)

## Example config block (index.js file contents)

```
export default ($locationProvider, $urlRouterProvider) => {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    $urlRouterProvider.otherwise('/home');
};
```
## Autoloading

|File path|Registered as (in Angular)|
|---|---|
|src/configs/routing/index.js|N/A (these are just functions ran at config time)|
