const path = require("path");
module.exports = {
    entry: ["./src/index.js"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    // mode: slsw.lib.webpack.isLocal ? "development": "production",
    optimization: {
        // We no not want to minimize our code.
        minimize: false
    },
};