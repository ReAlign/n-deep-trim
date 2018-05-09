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
  },
  plugins: [
  ]
};

module.exports = defaultConfig;