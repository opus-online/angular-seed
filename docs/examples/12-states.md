<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Contents**

- [Understanding states](#markdown-header-understanding-states)
    - [Example state (index.js file contents)](#markdown-header-example-state-indexjs-file-contents)
    - [Autoloading](#markdown-header-autoloading)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

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

