var express = require('express');
var router = express.Router();
var middlewares = require('middlewares');

router.get('/articles/create', middlewares.loginRequired, function(req, res, next) {
  res.send('This is the create article page');
});

router.get('/articles/modify/:id', middlewares.loginRequired, function(req, res, next) {
  res.send('This is the modify article page');
});

module.exports = router;
