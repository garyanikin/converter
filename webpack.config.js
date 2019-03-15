var path = require('path');

module.exports = {
    entry: './converter.js',
    output: {
        filename: './docs/bundle.js',
        path: path.resolve(__dirname, '.')
    }
};