/**
 * This script loads variables from the .env file into process.env
 * The default export is a filtered list of environmental variables (only the ones that are present in .env.example)
 */
const fs = require('fs');
const lodash = require('lodash');
const dotenv = require('dotenv-safe');

const envKeys = Object.keys(dotenv.parse(fs.readFileSync('.env.example')));

dotenv.load({ allowEmptyValues: true, silent: true });
module.exports = lodash.pickBy(process.env, (value, key) => lodash.includes(envKeys, key));
