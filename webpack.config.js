var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

// The plugin configuration sets /client/index.html as a template and creates a brand new index.html
// file in the /dist folder.
// The new index.html file is injected a script tag referencing our index_bundle.js in the <body> tag
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/client/index.html',
  filename: 'index.html',
  inject: 'body',
});

var ExtractTextWebpackPluginConfig = new ExtractTextWebpackPlugin('app.css', {
  allChunks: true,
});

module.exports = {
    // We first tell Webpack where the entry point/code for our app is located
  entry: [
    './client/index.js',
  ],
  output: {
    // Sets the filename and destination of our transformed code
    path: __dirname + '/dist',
    filename: 'index_bundle.js',
  },
  module: {
    // We then add our babel-loader for transforming our JSX syntax and es2015 code into
    // es5 code. We also exclude contents of /node_modules from undergoing these transformations.
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        // Looks at .babelrc file for each transformation to make on our JS code
        // Which includes React(jsx) and es2015 syntax
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        // allows us to scope css to particular documents by giving class names unique names
        // for each css class
        loader: ExtractTextWebpackPlugin.extract('style-loader', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'),
      },
    ],
  },
  // We then add our plugin configuration to the list of Webpack plugins
  plugins: [HTMLWebpackPluginConfig, ExtractTextWebpackPluginConfig],
};
