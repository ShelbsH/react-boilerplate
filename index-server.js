
//=============================================
// Express
const express = require('express');
const app = express();

//=============================================
// Regular dependency tools for express
const path = require('path');

//=============================================
// Port number for when the application is running
const PORT = 8000;

//=============================================
// Set the identifier to set the file path directory
const filePath = path.resolve(__dirname, 'dist/');

//=============================================
// Standard tools to be used for the webpack
// middleware server
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config.js');
const webpack = require('webpack');
const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  filePath: '/',
  contentBase: filePath,
  hot: true
}));

app.use(require('webpack-hot-middleware')(compiler));

//Sets the file path directory to load up scripts and styles from the HTML file.
app.use(express.static(filePath));

//Send the HTML file on root index GET request
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

//Send image files based on GET request.
app.get(/^\/.*\.(png|jpg)$/, (req, res) => {
  const imgFile = req.url.slice(req.url.lastIndexOf('/') + 1);
  res.sendFile(path.join(__dirname, `images/${imgFile}`));
});

//Run the application on PORT, 8000.
app.listen(PORT, () => console.log('The port, ' + PORT + ' is running'));
