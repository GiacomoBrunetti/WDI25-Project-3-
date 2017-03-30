const mongoose = require('mongoose');

const infoSchema = new mongoose.Schema({
  number: { type: Number, required: true },
  children: { type: Boolean, required: true },
  pets: { type: Boolean, required: true },
  otherInfo: { type: String },
  lat: { type: String },
  lng: { type: String },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
},{
  timestamps: true
});

module.exports = mongoose.model('Info', infoSchema);
