module.exports = {
    env: {
        es6: true,
        browser: true,
    },
    parser: 'babel-eslint',
    extends: ['angular'],
    plugins: ['angular'],
    rules: {
        'angular/on-watch': ['off'],
        'angular/log': ['warn']
    }
}
