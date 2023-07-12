var express = require('express');
var router = express.Router();
var middlewares = require('../middlewares/index.js');

/* GET users listing. */
/*
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
*/
router.get('/sign-in', function (req, res, next) {
    if (req.session.logined) {
        res.redirect('/users/profile');
        return;
    }
    res.render('users/sign-in', {});
});

router.get('/sign-out', function (req, res, next) {
    delete req.session.account;
    delete req.session.logined;
    res.redirect('/');
});

router.get('/sign-up', function (req, res, next) {
    if (req.session.logined) {
        res.redirect('/users/sign-out');
        return;
    }
    res.render('users/sign-up', {});
});

router.get('/profile', function (req, res, next) {
    // res.send('This is the profile page');
    if (req.session.logined) {
        res.locals.account = req.session.account;
        res.locals.logined = req.session.logined;
    }
    res.render('users/profile', {});
});

module.exports = router;
