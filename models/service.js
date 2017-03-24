const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  website: { type: String, required: true },
  telephone: { type: String, required: true },
  postcode: { type: String, required: true }
});

module.exports = mongoose.model('Service', serviceSchema);
