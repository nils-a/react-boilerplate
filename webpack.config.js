var webpack = require("webpack");
var WebpackCleanupPlugin = require("webpack-cleanup-plugin");

var core = [
    "core-js/features/array/find",
    "core-js/features/array/find-index",
    "core-js/features/map",
    "core-js/features/promise",
    "core-js/features/set"
]
module.exports = {
    entry: {
        "prod": core.concat("./src/index.tsx"),
        "mock": core.concat("./src/index-mock.tsx")
    },
    output: {
        filename: "app-[name].js",
        path: __dirname + "/dist"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            { test: /\.tsx?$/, loaders: ["babel-loader", "ts-loader"] },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

            // use  scss-loader -> css-loader -> style-loader for scss files...
            { 
                test: /\.s[ac]ss$/, loaders: [{
                    loader:"style-loader"
                },{
                    loader: "css-loader", options: {
                        sourceMap: true
                    }
                }, {
                    loader: "sass-loader", options: {
                        sourceMap: true
                    }
                }], 
                exclude:'/node_modules' },
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: { /* no externals - include ALL! */ },

    plugins: [
        /*new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('"production"')
          }
        }),*/
        //new webpack.optimize.UglifyJsPlugin(),
        //new webpack.optimize.OccurenceOrderPlugin(),
        //new webpack.optimize.DedupePlugin()
        new WebpackCleanupPlugin()
      ]
};