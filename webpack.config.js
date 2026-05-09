const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      }
    ]
  },
  plugins: [
    new BundleAnalyzerPlugin()
  ],
  devServer: {
    contentBase: __dirname + '/public',
    port: 8080
  }
};