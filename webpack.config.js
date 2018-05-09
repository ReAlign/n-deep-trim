let defaultConfig = {
  externals: {
  },
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: './dist/n-deep-trim.js',
    library: 'DeepTrim',
    libraryTarget: 'umd',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: [
          'babel-loader',
        ],
      },
    ]
  }
};

module.exports = defaultConfig;