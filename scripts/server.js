require('./environment.js');

const path = require('path');

const express = require('express');
const compression = require('compression');
const basicAuth = require('basic-auth-connect');

const app = express();
const publicPath = path.resolve('www');

if (process.env.BASIC_AUTH_USERNAME && process.env.BASIC_AUTH_PASSWORD) {
    app.use(basicAuth(process.env.BASIC_AUTH_USERNAME, process.env.BASIC_AUTH_PASSWORD));
}

app.use(compression({}));
app.use(express.static(publicPath));
app.get('*', (req, res) => res.sendFile(path.resolve(`${publicPath}/index.html`)));
app.listen(process.env.PORT, () => console.log(`Serving www on ${process.env.PORT}`));
