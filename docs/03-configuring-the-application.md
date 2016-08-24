# Configuring the application
## Environmental settings

Copy and paste the .env.example file and rename it to .env.
All keys present in the .env.example file need to be defined in the .env file. They can be empty, but they have to be defined.
All variables will be available via the global variable `SEED_CORE.ENV` in your angular application.

### .env file

```bash
NODE_ENV=production
```

### .env.example.file
```
NODE_ENV=development
```

### Example of using an environmental variable in a service

```
export default class {
    constructor () {
        console.log(`env ${SEED_CORE.ENV.NODE_ENV}`);
    }
}
```

## Defining the `PORT` variables

Define the `PORT` variable in your `.env` file. This is the port your application will be served on (either via `npm start` or via `npm run dev`)

```
PORT=8080
```

## Defining `BASIC_AUTH_USERNAME` / `BASIC_AUTH_PASSWORD` variables

Define the variables in your .env file. These can be left empty if you do not wish to protect your site with a username & password. **Only applies to `npm start`**

## `production` vs `development` environment

|Setting|Result|
|---|---|
|NODE_ENV=development| <ul><li>Enables SEED_CORE debugging</li><li>Enables source maps</li><li>Adds an eslint preloader that shows your code style errors in the console</li></ul>
|NODE_ENV=production|<ul><li>Automatically minifies javascript</li></ul>
