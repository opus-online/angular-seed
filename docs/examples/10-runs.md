# Understanding runs

* [Angular documentation](https://docs.angularjs.org/guide/module#run-blocks)

## Example run (index.js file contents)

```
export default function ($rootScope) {
    $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {
        console.error('error', error);
    });
}
```

## Autoloading

|File path|Registered as (in Angular)|
|---|---|
|src/runs/user/index.js|N/A (these are just functions ran at run time)|
