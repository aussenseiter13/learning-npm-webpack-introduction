const path = require("path");

module.exports = {
    entry: "/src/js/index.js",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "public"),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
};
