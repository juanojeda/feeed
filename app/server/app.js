const express       = require('express');
const morgan        = require('morgan');
const path          = require('path');
// TODO: figure out how to get express using ES6
// TODO: figure out how to return a 404 with an unknown path
// const RoutesConfig  = require('../src/routesConfig');

const app = express();

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;
