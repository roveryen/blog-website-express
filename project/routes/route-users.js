var express = require('express');
var router = express.Router();
const usersController = require("../controllers/users");
//var middlewares = require('../middlewares/index.js');

/* GET users listing. */
/*
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
*/
router.get('/sign-in', function (req, res, next) {
    usersController.signIn(req, res, next);
});

router.get('/sign-out', function (req, res, next) {
    usersController.signOut(req, res, next);
});

router.get('/sign-up', function (req, res, next) {
    usersController.signUp(req, res, next);
});

router.get('/profile', function (req, res, next) {
    usersController.profile(req, res, next);
});

module.exports = router;
