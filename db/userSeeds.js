const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
mongoose.connect(dbURI);

const User = require('../models/user');
const Pylon = require('../models/info');

User.collection.drop();
Info.collection.drop();

User
  .create([{
    username: '',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    username: '',
    password: 'password',
    passwordConfirmation: 'password'
  }, {
    username: '',
    password: 'password',
    passwordConfirmation: 'password'
  }])
  .then((users) => {
    console.log(`${users.length} users created!`);

    return Info.create([{
      number: ,
      children: '',
      pets: ,
      image: '',
      otherInfo: '',
      lat: '',
      lng: '',
      createdBy: user[]
    }]);
  })
  .then((pylons) => {
    console.log(`${info.length} info created!`);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    mongoose.connection.close();
  });
