const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
mongoose.connect(dbURI);

const User = require('../models/user');
const Info = require('../models/info');

User.collection.drop();
Info.collection.drop();

User
  .create([{
    username: 'arrianneoshea',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    username: 'james',
    password: '2309',
    passwordConfirmation: '2309'
  },{
    username: 'olivia',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    username: 'jack',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    username: 'bob',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    username: 'calvin',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    username: 'daniel',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    username: 'eric',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    username: 'fab',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    username: 'geri',
    password: 'password',
    passwordConfirmation: 'password'
  }])
  .then((users) => {
    console.log(`${users.length} users created!`);

    return Info.create([{
      number: 2,
      children: 'false',
      pets: 'true',
      image: '',
      otherInfo: 'Seen a couple of times this week.',
      lat: '51.514672',
      lng: '-0.049095',
      createdBy: users[0]
    },{
      number: 1,
      children: 'false',
      pets: 'true',
      image: '',
      otherInfo: '',
      lat: '51.512909',
      lng: '-0.066948',
      createdBy: users[0]
    },{
      number: 3,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.510772',
      lng: '-0.077934',
      createdBy: users[0]
    },{
      number: 1,
      children: 'true',
      pets: 'false',
      image: '',
      otherInfo: 'Worried that there is a child but have never seen them before so hopefully it is just a one off.',
      lat: '51.510238',
      lng: '-0.074673',
      createdBy: users[0]
    },{
      number: 1,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.509811',
      lng: '-0.068665',
      createdBy: users[0]
    },{
      number: 3,
      children: 'false',
      pets: 'true',
      image: '',
      otherInfo: 'Often seen travelling up and down the road',
      lat: '51.512909',
      lng: '-0.06403',
      createdBy: users[0]
    },{
      number: 2,
      children: 'false',
      pets: 'true',
      image: '',
      otherInfo: 'May have seen this pair before',
      lat: '51.512802',
      lng: '-0.061111',
      createdBy: users[0]
    },{
      number: 1,
      children: 'false',
      pets: 'true',
      image: '',
      otherInfo: 'This woman seems to be in a bad way and carrying a cat',
      lat: '51.513336',
      lng: '-0.059052',
      createdBy: users[0]
    },{
      number: 2,
      children: 'false',
      pets: 'true',
      image: '',
      otherInfo: '',
      lat: '51.514191',
      lng: '-0.056648',
      createdBy: users[0]
    },{
      number: 1,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.515473',
      lng: '-0.061283',
      createdBy: users[0]
    },{
      number: 1,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.518464',
      lng: '-0.097847',
      createdBy: users[1]
    },{
      number: 2,
      children: 'false',
      pets: 'true',
      image: '',
      otherInfo: '',
      lat: '51.517503',
      lng: '-0.098362',
      createdBy: users[1]
    },{
      number: 2,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.514298 ',
      lng: '-0.092182',
      createdBy: users[1]
    },{
      number: 2,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.513871',
      lng: '-0.098362',
      createdBy: users[1]
    },{
      number: 1,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.510772',
      lng: '-0.115356',
      createdBy: users[1]
    },{
      number: 2,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.510559',
      lng: '-0.112095',
      createdBy: users[1]
    },{
      number: 3,
      children: 'false',
      pets: 'true',
      image: '',
      otherInfo: '',
      lat: '51.512909 ',
      lng: '-0.122223',
      createdBy: users[1]
    },{
      number: 2,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.511093',
      lng: '-0.121193',
      createdBy: users[1]
    },{
      number: 2,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.514939 ',
      lng: '-0.128574',
      createdBy: users[1]
    },{
      number: 2,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.516114',
      lng: '-0.138187',
      createdBy: users[1]
    },{
      number: 1,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.514725',
      lng: '-0.131149',
      createdBy: users[2]
    },{
      number: 2,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.511413',
      lng: '-0.108147',
      createdBy: users[2]
    },{
      number: 1,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.514618',
      lng: '-0.101624',
      createdBy: users[2]
    },{
      number: 2,
      children: 'false',
      pets: 'true',
      image: '',
      otherInfo: '',
      lat: '51.517289',
      lng: '-0.096817',
      createdBy: users[2]
    },{
      number: 2,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.514084 ',
      lng: '-0.09407',
      createdBy: users[2]
    },{
      number: 2,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.510025',
      lng: '-0.071239',
      createdBy: users[2]
    },{
      number: 2,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.510879',
      lng: '-0.067291',
      createdBy: users[2]
    },{
      number: 1,
      children: 'false',
      pets: 'true',
      image: '',
      otherInfo: 'Seen this person before but now they have a dog',
      lat: '51.513069',
      lng: '-0.062914',
      createdBy: users[2]
    },{
      number: 2,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.516915',
      lng: '-0.068064',
      createdBy: users[2]
    },{
      number: 2,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.518678',
      lng: '-0.061369',
      createdBy: users[2]
    },{
      number: 2,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.519212',
      lng: '-0.058107',
      createdBy: users[3]
    },{
      number: 3,
      children: 'false',
      pets: 'true',
      image: '',
      otherInfo: '',
      lat: '51.519425',
      lng: ' -0.064287',
      createdBy: users[3]
    },{
      number: 2,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.516648',
      lng: '-0.066433',
      createdBy: users[3]
    },{
      number: 2,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.51387',
      lng: '-0.070724',
      createdBy: users[3]
    },{
      number: 2,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.514458',
      lng: '-0.077162',
      createdBy: users[3]
    },{
      number: 1,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.514298',
      lng: '-0.073986',
      createdBy: users[3]
    },{
      number: 2,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.514565 ',
      lng: '-0.066433',
      createdBy: users[3]
    },{
      number: 2,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.512482',
      lng: '-0.072355',
      createdBy: users[3]
    },{
      number: 3,
      children: 'false',
      pets: 'true',
      image: '',
      otherInfo: '',
      lat: '51.509223',
      lng: '-0.083342',
      createdBy: users[3]
    },{
      number: 2,
      children: 'true',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.514031',
      lng: '-0.092354',
      createdBy: users[3]
    },{
      number: 2,
      children: 'false',
      pets: 'true',
      image: '',
      otherInfo: '',
      lat: '51.51339',
      lng: '-0.09819',
      createdBy: users[4]
    },{
      number: 1,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.513443',
      lng: ' -0.085144',
      createdBy: users[4]
    },{
      number: 2,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.515526',
      lng: '-0.069695',
      createdBy: users[4]
    },{
      number: 1,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.516221',
      lng: '-0.081024',
      createdBy: users[4]
    },{
      number: 1,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.513977',
      lng: ' -0.078278',
      createdBy: users[4]
    },{
      number: 2,
      children: 'false',
      pets: 'true',
      image: '',
      otherInfo: '',
      lat: '51.513977',
      lng: '-0.075445',
      createdBy: users[4]
    },{
      number: 1,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.515313',
      lng: '-0.072269',
      createdBy: users[4]
    },{
      number: 1,
      children: 'true',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.514779',
      lng: '-0.067806',
      createdBy: users[4]
    },{
      number: 3,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.514244 ',
      lng: '-0.075703',
      createdBy: users[4]
    },{
      number: 2,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.519532',
      lng: '-0.059738',
      createdBy: users[4]
    },{
      number: 2,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.51809',
      lng: '-0.062227',
      createdBy: users[5]
    },{
      number: 1,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.521989',
      lng: '-0.046649',
      createdBy: users[5]
    },{
      number: 1,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.523751',
      lng: '-0.059395',
      createdBy: users[5]
    },{
      number: 4,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: 'Group fo people in very bad conditions',
      lat: '51.521882',
      lng: '-0.07154',
      createdBy: users[5]
    },{
      number: 2,
      children: 'false',
      pets: 'true',
      image: '',
      otherInfo: '',
      lat: '51.519505 ',
      lng: '-0.075617',
      createdBy: users[5]
    },{
      number: 1,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.518037',
      lng: '-0.076132',
      createdBy: users[5]
    },{
      number: 1,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.519532',
      lng: '-0.059738',
      createdBy: users[5]
    },{
      number: 2,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.517422',
      lng: '-0.082998',
      createdBy: users[5]
    },{
      number: 2,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.51825',
      lng: '-0.088792',
      createdBy: users[5]
    },{
      number: 2,
      children: 'false',
      pets: 'true',
      image: '',
      otherInfo: 'probably a couple in very bad conditions',
      lat: '51.520707',
      lng: '-0.07935',
      createdBy: users[6]
    },{
      number: 2,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.516194',
      lng: '-0.080981',
      createdBy: users[6]
    },{
      number: 2,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.514512 ',
      lng: '-0.080338',
      createdBy: users[6]
    },{
      number: 2,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.51363',
      lng: '-0.083299',
      createdBy: users[6]
    },{
      number: 1,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.510879',
      lng: '-0.086603',
      createdBy: users[6]
    },{
      number: 1,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.511494',
      lng: ' -0.078278',
      createdBy: users[6]
    },{
      number: 1,
      children: 'false',
      pets: 'true',
      image: '',
      otherInfo: '',
      lat: '51.510639',
      lng: '-0.077419',
      createdBy: users[6]
    },{
      number: 1,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.50957',
      lng: '-0.08244',
      createdBy: users[6]
    },{
      number: 2,
      children: 'false',
      pets: 'true',
      image: '',
      otherInfo: '',
      lat: '51.510612',
      lng: ' -0.07802',
      createdBy: users[6]
    },{
      number: 1,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.514271',
      lng: '-0.085831',
      createdBy: users[6]
    },{
      number: 1,
      children: 'false',
      pets: 'true',
      image: '',
      otherInfo: '',
      lat: '51.510051',
      lng: '-0.076518',
      createdBy: users[6]
    },{
      number: 2,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.509143',
      lng: '-0.074329',
      createdBy: users[7]
    },{
      number: 2,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.509223 ',
      lng: '-0.079608',
      createdBy: users[7]
    },{
      number: 1,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.509303',
      lng: ' -0.070381',
      createdBy: users[7]
    },{
      number: 2,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.509784',
      lng: '-0.063815',
      createdBy: users[7]
    },{
      number: 1,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.516007',
      lng: '-0.068707',
      createdBy: users[7]
    },{
      number: 1,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.515446',
      lng: '-0.07154',
      createdBy: users[7]
    },{
      number: 2,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.515339',
      lng: '-0.076904',
      createdBy: users[7]
    },{
      number: 1,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.517529',
      lng: '-0.0736',
      createdBy: users[7]
    },{
      number: 2,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.520307',
      lng: '-0.083256',
      createdBy: users[7]
    },{
      number: 2,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.521321',
      lng: '-0.086689',
      createdBy: users[7]
    },{
      number: 2,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.522683',
      lng: '-0.079994',
      createdBy: users[8]
    },{
      number: 2,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.523484',
      lng: '-0.085359',
      createdBy: users[8]
    },{
      number: 2,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.524445',
      lng: '-0.079179',
      createdBy: users[8]
    },{
      number: 1,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.525887',
      lng: '-0.07493',
      createdBy: users[8]
    },{
      number: 2,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.526581',
      lng: ' -0.073128',
      createdBy: users[8]
    },{
      number: 1,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.52821',
      lng: ' -0.079908',
      createdBy: users[8]
    },{
      number: 1,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.529732',
      lng: '-0.069008',
      createdBy: users[8]
    },{
      number: 2,
      children: 'false',
      pets: 'true',
      image: '',
      otherInfo: '',
      lat: '51.531467',
      lng: '-0.079694',
      createdBy: users[8]
    },{
      number: 2,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.531067',
      lng: '-0.087032',
      createdBy: users[8]
    },{
      number: 2,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.531441 ',
      lng: '-0.101495',
      createdBy: users[8]
    },{
      number: 1,
      children: 'false',
      pets: 'false',
      image: '',
      otherInfo: '',
      lat: '51.534697',
      lng: '-0.109735',
      createdBy: users[9]
    }]);
  })
  .then((info) => {
    console.log(`${info.length} info created!`);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    mongoose.connection.close();
  });