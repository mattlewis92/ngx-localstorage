const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './projects/schematics/src/ng-add/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/ngx-localstorage/schematics/ng-add'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  mode: 'production',
  target: 'node',
  externals: [
    nodeExternals({
      whitelist: ['ngx-schematics-utils']
    })
  ],
  plugins: [
    new CopyWebpackPlugin(
      [
        {
          from: 'projects/schematics/src/collection.json',
          to: '../collection.json',
          toType: 'file'
        }
      ],
      {}
    )
  ]
};
