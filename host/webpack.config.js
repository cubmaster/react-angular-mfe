const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { dependencies } = require("./package.json");
module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
        name: "ngmfe",
        remotes: {
          'ngmfe': `ngmfe@http://localhost:4200/remoteEntry.js`,
        },
        shared: {},
      }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    

  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
  target: "web",
};