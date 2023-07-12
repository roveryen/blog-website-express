var express = require('express');
var router = express.Router();
const usersController = require("../controllers/users");
const articlesController = require("../controllers/articles");
const commentsController = require("../controllers/comments");

router.post('/users/sign-in', function (req, res, next) {
    usersController.apiSignIn(req, res, next);
});

router.post('/users/sign-up', function (req, res, next) {
    usersController.apiSignUp(req, res, next);
});

router.get('/articles/list', function (req, res, next) {
    articlesController.apiList(req, res, next);
});

router.post('/articles/update/:id', function (req, res, next) {
    articlesController.apiUpdate(req, res, next);
});

router.post('/articles/delete/:id', function (req, res, next) {
    articlesController.apiDelete(req, res, next);
});

router.get('/comments/:id', function (req, res, next) {
    commentsController.apiList(req, res, next);
});

router.post('/comments/update/:id', function (req, res, next) {
    commentsController.apiUpdate(req, res, next);
});

router.post('/comments/delete/:id', function (req, res, next) {
    commentsController.apiDelete(req, res, next);
});


module.exports = router;
