/**
 * Created by u on 2017/11/17.
 */
var webpack=require("webpack");
var path=require("path");

module.exports = {
    entry: path.join(__dirname,"js/app/index.js"),
    output:{
        path:path.join(__dirname,"../public/js"),
        filename:"index.js"
    },

    module: {
        rules: [{
            test: /\.less$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader" // compiles Less to CSS
            }]
        }]
    },

    resolve:{
        alias:{
            jquery:path.join(__dirname,"js/libs/jquery.js"),
            less: path.join(__dirname, 'less'),
            mod:path.join(__dirname,"js/mod")
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery"
        })
    ]
};
