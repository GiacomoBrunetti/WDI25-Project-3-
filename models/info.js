const mongoose = require('mongoose');
const s3 = require('../lib/s3');

const infoSchema = new mongoose.Schema({
  number: { type: number, required: true },
  caption: { type: String, required: true },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
});

infoSchema
  .path('image')
  .set(function getPreviousImage(image) {
    this._image = this.image;
    return image;
  });

infoSchema
  .virtual('imageSRC')
  .get(function getImageSRC() {
    if(!this.image) return null;
    return `https://s3-eu-west-1.amazonaws.com/wdi-25-london-project-2/${this.image}`;
  });

infoSchema.pre('save', function checkPreviousImage(next) {
  if(this.isModified('image') && this._image) {
    return s3.deleteObject({ Key: this._image }, next);
  }
  next();
});

infoSchema.pre('remove', function removeImage(next) {
  if(this.image) s3.deleteObject({ Key: this.image }, next);
  next();
});

module.exports = mongoose.model('Post', infoSchema);