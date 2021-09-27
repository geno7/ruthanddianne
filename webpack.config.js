//minify and output stuff with webpack
module.exports = {
    entry: "./public/js/app.js",
    mode: "development",
    output: {
        path: `${__dirname}/dist`,
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.(svg|gif|png|eot|woff|ttf)$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.ttf$/,
                use: ["url-loader"],
            },
        ],
    },
};

