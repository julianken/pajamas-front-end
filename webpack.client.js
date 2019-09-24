const path = require('path')

module.exports = {
  entry: './src/index.js',
  watch: true,
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader",
        }, {
          loader: "css-loader",
        }, {
          loader: "sass-loader",
          options: {
            implementation: require("sass")
          } 
        }]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.scss']
  },
}

