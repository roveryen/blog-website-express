var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.locals.account = req.session.account;
  res.locals.logined = req.session.logined;
  res.render('index', { title: 'Express' });
});

module.exports = router;
