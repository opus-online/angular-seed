# Autoloading

All elements in the `src/` folder are autoloaded and registered with Angular.

|Type|File path|Registered as (in Angular)|
|---|---|---|
|[Component](examples/01-components.md)|src/components/user/list/index.js|	userList (user-list in templates)|
|[Configs](docs/examples/02-configs.md)|src/configs/routing/index.js|N/A (these are just functions ran at config time)|
|[Constants](docs/examples/03-constants.md)|src/constants/userType/index.js|USER_TYPE|
|[Enums](docs/examples/04-enums.md)|src/enums/user/type/index.js|USER_TYPE_ENUM|
|[Factories](docs/examples/05-factories.md)|src/factories/user/index.js|UserFactory|
|[Filters](docs/examples/06-filters.md)|src/filters/dateTime/index.js|dateTime|
|[Layouts](docs/examples/07-layouts.md)|src/layouts/application/index.js|ApplicationLayout|
|[Providers](docs/examples/08-providers.md)|src/providers/lodash/index.js|lodash (lodashProvider to configure)|
|[Resources](docs/examples/09-resources.md)|src/resources/user/index.js|UserResource|
|[Runs](docs/examples/10-runs.md)|src/runs/user/index.js|N/A (these are just functions ran at run time)|
|[Services](docs/examples/11-services.md)|src/services/toast/index.js|ToastService|
|[States](docs/examples/12-states.md)|src/states/user/home/index.js|user.home (states/user/index.js state needs to exist)|
