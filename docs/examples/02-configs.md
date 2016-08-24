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
