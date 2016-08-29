<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Contents**

- [Understanding factories](#markdown-header-understanding-factories)
    - [Example factory (index.js file contents)](#markdown-header-example-factory-indexjs-file-contents)
    - [Autoloading](#markdown-header-autoloading)
- [Testing factories](#markdown-header-testing-factories)
    - [A simple factory example](#markdown-header-a-simple-factory-example)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

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

# Testing factories

Factories are just Javascript files that export a function.
Testing Factories is as simple as requiring the Factory and running the Function with the mocked dependecies

## A simple factory example

Factory:

```javascript
export default function (lodash, LogEntry) {
    const defaults = {
		type: 'USER_GENERATED'
    };
    return {
        createNewLogEntry: (options) => {
            return new LogEntry(lodash.extend({}, defaults, options));
        }
    };
}

```

Test:

```javascript
import factory from './index.js';
import lodash from 'lodash';

describe('logbook factory', () => {
    let logbookFactory;
    let Logbook;
    beforeEach(() => {
        Logbook = jasmine.createSpy('Logbook');
        logbookFactory = factory(lodash, Logbook);
    });
    describe('createNewLogEntry', () => {
        it('should create a new Logbook object', () => {
            logbookFactory.createNewLogEntry({ id: 3 });
            expect(Logbook).toHaveBeenCalledWith({
                id: 3,
                type: 'USER_GENERATED'
            });
        });
    });
});
```
