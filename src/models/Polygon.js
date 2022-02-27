const mongoose = require('mongoose');
const polygonSchema = mongoose.Schema({
  points: { type: [Number], required: true },
});

const Polygon = mongoose.model('Polygon', polygonSchema);

module.exports = Polygon;