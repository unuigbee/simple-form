var HtmlWebpackPlugin = require('html-webpack-plugin');

// The plugin configuration uses /app/index.html as a template and creates a brand new index.html file
// The new index.html file gets placed in the /dist folder and is injected a script
// in the <body> of the index.html file referencing our index_bundle.js.
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
    // We first tell Webpack where the entry point for our app is located
  entry: [
    './app/index.js',
  ],
  output: {
    // Sets the filename and destination of our transformed code
    path: __dirname + '/dist',
    filename: 'index_bundle.js',
  },
  module: {
    // We then add our babel-loader for transforming our JSX syntax and es2015 code into
    // es5 Javascript code. We also exclude the node_modules from undergoing these transformations
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        // Looks at .babelrc file for each transformation to make on our js code
        // Which includes React(jsx) and es2015 syntax
        loader: 'babel-loader',
      },
    ],
  },
  // We then add our plugin configuration to the list of Webpack plugins
  plugins: [HTMLWebpackPluginConfig],
};
