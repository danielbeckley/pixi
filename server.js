const path = require('path');
const express = require('express');
const config = require('./src/config/config');
const mongoose = require('mongoose');
const Polygon = require('./src/models/Polygon');

//initialize express
const app = express();
const port = process.env.PORT || 8080;
//setup static directory to serve
const publicDirectoryPath = path.join(__dirname, 'public');

app.use(express.static(publicDirectoryPath));

app.get('/', function (req, res) {
  res.sendFile('index.html');
});

app.get('/polygon', (req, res) => {
  Polygon.find().then((poly) => res.json(poly));
});

mongoose.connect(config.mongoose.uri, config.mongoose.options).then(() => {
  console.log('Connected to MongoDB');
  app.listen(port, () => {
    console.log('Server is up');
  });
});

//this was run only once to create the points.
// Polygon.create({ points: [10, 10, 120, 100, 120, 200, 70, 200] });
