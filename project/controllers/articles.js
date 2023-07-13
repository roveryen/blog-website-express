const mongoose = require('mongoose');
const Articles = require("../models/articles");
const Comments = require("../models/comments");

const articlesController = {
    createConnection() {
        mongoose.connect('mongodb://nodejs-mongodb:27017/blog-website');
    },
    getCurrentDateTime() {
        const date = new Date();
        /*
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
         */
        return date.getTime();
    },
    apiList: function (req, res, next) {
        this.createConnection();
        Articles.find({
            status: 1
        }).sort({
            createdDate: -1
        }).then((articles) => {

            res.status(200).json({
                errno: 0,
                message: "",
                articles: articles
            });
        }).catch((err) => {
            console.log(err);
            res.status(400).json({
                errno: -1,
                message: err.message
            });
        });
    },
    apiUpdate: function (req, res, next) {
        this.createConnection();
        Articles.findOne({
            _id: req.params.id
        }).then((article) => {
            try {
                let message = "Successfully updated"
                if (article === null) {
                    article = new Articles();
                    message = "Successfully created";
                }

                article.title = req.body.title;
                article.content = req.body.content;
                article.author = req.session.account;
                article.updatedDate = this.getCurrentDateTime();
                article.save();

                res.status(200).json({
                    errno: 0,
                    message: message
                });
            } catch (err) {
                console.log(err);
                res.status(400).json({
                    errno: -1,
                    message: err.message
                });
            }
        }).catch((err) => {
            console.log(err);
            res.status(400).json({
                errno: -1,
                message: err.message
            });
        });
    },
    apiDelete: function (req, res, next) {
        this.createConnection();
        Articles.findByIdAndDelete(req.params.id).then((article) => {
            Comments.deleteMany({
                article_id: article._id
            });

            res.status(200).json({
                errno: 0,
                message: "Successfully deleted"
            });
        }).catch((err) => {
            console.log(err);
            res.status(400).json({
                errno: -1,
                message: err.message
            });
        });
    },
    detail: function (req, res, next) {
        this.createConnection();
        Articles.findOne({
            _id: req.params.id
        }).then((article) => {

        }).catch((err) => {
            console.log(err);
            res.status(400).json({
                errno: -1,
                message: err.message
            });
        });
    },
    create: function (req, res, next) {
        const article = new Articles;
        res.render("articles/edit", {article: article});
    },
    modify: function (req, res, next) {
        this.createConnection();
        Articles.findOne({
            _id: req.params.id
        }).then((article) => {
            res.render("articles/edit", {article: article});
        }).catch((err) => {
            console.log(err);
            res.render("error", {
                error: err,
                message: err.message
            });
        });
    },
}

module.exports = articlesController;