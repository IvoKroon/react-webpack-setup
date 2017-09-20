let HTMLWebpackPlugin = require('html-webpack-plugin');
let HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/src/index.html',
    filename: 'index.html',
    inject: 'body'
});
module.exports = {
    entry: __dirname + '/src/index.js',
    module: {
        loaders:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    output:{
        filename: "index.js",
        path: __dirname + "/public"
    },
    plugins: [HTMLWebpackPluginConfig]
};