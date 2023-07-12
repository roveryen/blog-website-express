var express = require('express');
var router = express.Router();
const middlewares = require('../middlewares/index.js');
const articlesController = require("../controllers/articles");

router.get('/create', middlewares.loginRequired, function (req, res, next) {
    articlesController.create(req, res, next);
});

router.get('/modify/:id', middlewares.loginRequired, function (req, res, next) {
    articlesController.modify(req, res, next);
});

module.exports = router;
