const router = require('express').Router();
const info = require('../controllers/info');
const users = require('../controllers/users');
const resources = require('../controllers/resources');
const auth = require('../controllers/auth');
const oauth = require('../controllers/oauth');
const imageUpload = require('../lib/imageUpload');
const secureRoute = require('../lib/secureRoute');

router.route('/info')
  .get(info.index)
  .post(secureRoute, imageUpload, info.create);

router.route('/info/:id')
  .get(info.show)
  .delete(secureRoute, info.delete)
  .put(secureRoute, info.update);

router.route('/resources')
  .get(resources.index);

router.route('/users/:id')
  .get(users.show)
  .delete(secureRoute, users.delete);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
