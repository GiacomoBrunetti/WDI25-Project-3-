module.exports = {

  facebook: {
    loginURL: 'https://www.facebook.com/v2.8/dialog/oauth/authorize',
    accessTokenURL: 'https://graph.facebook.com/v2.8/oauth/access_token',
    profileURL: 'https://api.facebook.com/user',
    redirectUrl: process.env.NODE_ENV,
    clientId: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    scope: 'user:username'

  }
};
