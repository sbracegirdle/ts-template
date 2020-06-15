const path = require('path')

// npm install --save-dev webpack webpack-cli typescript ts-loader

module.exports = {
  entry: './src/index.ts',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    libraryTarget: 'commonjs',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
}
