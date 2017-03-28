const request = require('request-promise');
const config = require('../config/oAuth');
const User = require('../models/user');
const qs = require('qs');
const jwt = require('jsonwebtoken');
const secret = require('../config/environment').secret;


function facebook(req, res) {

  // request an access token
  request.get({
    url: 'https://graph.facebook.com/v2.5/oauth/access_token',
    qs: {
      code: req.body.code,
      client_id: process.env.FACEBOOK_APP_ID,
      client_secret: process.env.FACEBOOK_APP_SECRET,
      redirect_uri: req.body.redirectUri
    },
    json: true
  }).then((accessToken) => {
    console.log(accessToken);
    res.status(200).send();
  });

}







// function facebook(req, res) {
//   //REQUEST AN ACCESS TOKEN
//   request.get({
//     url: 'https://graph.facebook.com/v2.5/oauth/access_token',
//     qs: {
//       code: req.body.code,
//       client_id: process.env.FACEBOOK_APP_ID,
//       client_secret: process.env.FACEBOOK_APP_SECRET,
//       redirect_uri: req.body.redirectUri
//     },
//     json: true
//   }).then((accessToken) => {
//     console.log(accessToken);
//     //request user's profile with accessToken
//     return request.get({
//       url: 'https://graph.facebook.com/v2.5/me?fields=id,name,email,picture',
//       qs: accessToken,
//       json: true
//     });
//
//   }).then((profile) => {
//     //find or create a user
//     User.findOne({ email: profile.email }, (err, user) => {
//       if(err) return res.status(500).json({error: err });
//
//       if(!user) {
//         user = new User({
//           facebookId: profile.id,
//           profileImage: profile.picture.data.url,
//           email: profile.email,
//           username: `${profile.name} ${profile.id}`
//         });
//       } else {
//         user.facebookId = profile.id;
//         user.profileimage = profile.picture.data.url;
//         console.log('getting facebook profile for facebook ', profile.id, profile.email);
//       }
//       user.save((err, user) => {
//         if(err) return res.status(400).json({ error: err });
//
//         //geenrate JWT and send to the client
//         const payload = { _id: user._id, username: user.username };
//         const token = jwt.sign(payload, secret, { expiresIn: '24h'});
//
//         res.status(200).json({
//           user,
//           token
//         });
//       });
//
//     });
//   });
//
//}

module.exports = {
  facebook
};
