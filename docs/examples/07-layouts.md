# Understanding layouts

Layouts are just root [states](12-states.md) that other states can inherit from. In a single page application that has both public and private routes you'll typically have 3 layouts:

* ApplicationLayout - this is the root application layout that is always executed
    * This is a good place to handle loading translations
* AuthorizedLayout - this is the layout you'll use for private routes (e.g. /user/settings)
    * parent: 'ApplicationLayout' (inherits from the ApplicationLayout)
* UnauthorizedLayout - this is the layout you'll use for public routes (e.g. signup / forgot passsword)
    * parent: 'ApplicationLayout' (inherits from the ApplicationLayout)

## Example layout (index.js file contents)

```
export default {
    parent: 'ApplicationLayout',
    template: `
        <header></header>
        <div class="content" ui-view></div>
        <footer></footer>
    `,
};

```

## Autoloading

|File path|Registered as (in Angular)|
|---|---|
|src/layouts/application/index.js|ApplicationLayout|

