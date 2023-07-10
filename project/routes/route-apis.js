var express = require('express');
var router = express.Router();


router.get('/users/sign-in', function(req, res, next) {
  res.send('This is the sign-in page');
});

router.post('/users/sign-in', function(req, res, next) {
  res.send('This is the sign-in funciton');
});


router.get('/users/sign-out', function(req, res, next) {
  res.send('This is the sign-out page');
});

router.get('/users/sign-up', function(req, res, next) {
  res.send('This is the sign-up page');
});

router.get('/users/profile', function(req, res, next) {
  res.send('This is the profile page');
});

router.get('/articles/create', function(req, res, next) {
  res.send('This is the create article page');
});

router.get('/articles/modify/:id', function(req, res, next) {
  res.send('This is the modify article page');
});

router.post('/articles/update/:id', function(req, res, next) {
  res.send('This is the update article function');
});

router.post('/articles/delete/:id', function(req, res, next) {
  res.send('This is the delete article function');
});

router.get('/comments/:id', function(req, res, next) {
  res.send('This is the comments of article page');
});

router.post('/comments/update/:id', function(req, res, next) {
  res.send('This is the update comment function');
});

router.post('/comments/delete/:id', function(req, res, next) {
  res.send('This is the delete comment function');
});



module.exports = router;
