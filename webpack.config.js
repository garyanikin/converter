var path = require('path');

module.exports = {
    entry: './converter.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '.')
    }
};