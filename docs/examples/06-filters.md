<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
Content

- [Understanding filters](#understanding-filters)
  - [Example filter (index.js file contents)](#example-filter-indexjs-file-contents)
  - [Autoloading](#autoloading)
- [Testing filters](#testing-filters)
  - [A simple filter example](#a-simple-filter-example)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Understanding filters

* [Angular documentation](https://docs.angularjs.org/guide/filter)

## Example filter (index.js file contents)

```javascript
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

# Testing filters

Filters are just Javascript files that export a function.
Testing Filters is as simple as requiring the Filter and running the Function with the mocked dependencies

## A simple filter example

Filter:

```javascript
/* @ngInject */
export default (moment) => (input) => moment(input).format('LLL');
```

Test:

```javascript
import filter from './index.js';
import moment from 'moment';

describe('dateTime filter', () => {
    it('should return a formatted date string', () => {
        const filterFunction = filter(moment);
        const date = new Date('Mon Aug 29 2016 00:00:00 GMT+0300 (FLE Daylight Time)');
        expect(filterFunction(date)).toEqual('August 29, 2016 12:00 AM');
    });
});
```
