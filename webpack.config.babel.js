import path from 'path';


export default {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'uncamelize',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    root: path.resolve(__dirname, 'src'),
    alias: {
      src: path.resolve(__dirname, 'src'),
    },
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: true,
  },
};
