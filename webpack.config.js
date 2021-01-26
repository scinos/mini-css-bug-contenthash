const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  plugins: [new MiniCssExtractPlugin({
    filename: '[name].[id].[contenthash].css',
    chunkFilename: '[name].[id].[contenthash].css',
  })],
  mode: "production",
  output: {
    filename: '[name].[id].[contenthash].js',
    chunkFilename: '[name].[id].[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  optimization: {
      runtimeChunk: true,
      minimize: false,
  }
};
