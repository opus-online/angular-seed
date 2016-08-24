# Understanding filters

* [Angular documentation](https://docs.angularjs.org/guide/filter)

## Example filter (index.js file contents)

```
export default (moment) => (input) => moment(input).format('LLL');
```

## Autoloading

|File path|Registered as (in Angular)|
|---|---|
|src/filters/dateTime/index.js|dateTime|

Example usage:

```
 {{ date | dateTime }}
 ```
