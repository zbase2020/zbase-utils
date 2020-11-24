const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname),
    filename: 'zbase-utils.js',
    globalObject: 'this',
    library: 'zbaseutils',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "env"
            ]
          }
        },
        exclude: path.resolve(__dirname, "node_modules"),
        include: path.resolve(__dirname, "src")
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin()
  ]
}
