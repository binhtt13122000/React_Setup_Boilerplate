const { merge: mergeProd } = require("webpack-merge");
const commonProd = require("./webpack.common.js");
const pathProd = require("path");

module.exports = mergeProd(commonProd, {
    mode: "production",
    output: {
        path: pathProd.resolve(__dirname, "build-prod"),
        filename: "bundle.js",
        publicPath: "/",
    },
});
