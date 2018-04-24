let defaultConfig = {
  externals: {
  },
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: './dist/n-deep-trim.js',
    library: 'nDeepTrim',
    libraryTarget: 'umd',
  },
  module: {
  },
  plugins: [
  ]
};

module.exports = defaultConfig;