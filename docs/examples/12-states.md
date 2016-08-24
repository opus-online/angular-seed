# Understanding states

* [UI Router documentation](https://github.com/angular-ui/ui-router/tree/legacy)

## Example state (index.js file contents)

```
export default {
    url: '/home',
    template: '<home/>'
};
```

## Autoloading

|File path|Registered as (in Angular)|
|---|---|
|src/states/user/home/index.js|user.home (states/user/index.js state needs to exist)|

