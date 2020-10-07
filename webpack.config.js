const path = require("path");
// import path from "path"; 와 동일하지만 모던 자바스크립트가 아니라서 쓸 수 없음
const autoprefixer = require("autoprefixer");
// const ExtractCSS = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = path.join(__dirname, "static");

const config = {
  devtool: "cheap-module-source-map",
  entry: ["@babel/polyfill", ENTRY_FILE],
  mode: MODE,
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              // plugin() {
              //   return [autoprefixer({ browsers: "cover 99.5%" })];
              // },
              postcssOptions: {
                plugins: [
                  [
                    "autoprefixer",
                    {
                      //options
                      // browsers: "cover 99.5%",
                      overrideBrowserslist: "cover 99.5%",
                    },
                  ],
                ],
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  output: {
    path: OUTPUT_DIR,
    filename: "[name].js",
  },
  // plugins: [new ExtractCSS("style.css")],
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "style.css",
    }),
  ],
};

module.exports = config;
