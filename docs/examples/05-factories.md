# Understanding factories

* [Angular documentation](https://docs.angularjs.org/guide/providers#factory-recipe)

## Example factory (index.js file contents)

```
export default function (USER_STATUS_ENUM, User) {
    return {
        createNewUser: () => {
            return new User({
                status: USER_STATUS_ENUM.KEYS.ACTIVE
            });
        }
    };
}
```

## Autoloading

|File path|Registered as (in Angular)|
|---|---|
|src/factories/user/index.js|UserFactory|
