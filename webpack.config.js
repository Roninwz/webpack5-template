const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const base = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",// 将 JS 字符串生成为 style 节点
          "css-loader",// 将 CSS 转化成 CommonJS 模块
          "sass-loader",// 将 Sass 编译成 CSS
        ],
      },
    ],
  }
}

const development = {
  mode: "development",
  ...base,
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: false,
    progress: true,
    port: 3000,
  },
};

const production = {
  mode: "production",
  ...base,
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      minify: true
    })
  ]
}

module.exports = process.env.NODE_ENV === 'development' ? development : production;
