const path = require('path');

module.exports = {
    entry: {
        main: './main',
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".js", ".ts"]
    },
    output: {
        path: path.join(__dirname, '/demo'),
        filename: 'bones.js'
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    },
    watch: true
};