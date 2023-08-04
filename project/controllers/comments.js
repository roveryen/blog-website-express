const mongoose = require('mongoose');
const Comments = require("../models/comments");

const articlesController = {
    createConnection() {
        mongoose.connect(process.env['MONGODB_CONNECT_STRING']);
    },
    apiList: function (req, res, next) {
        this.createConnection();
        Comments.find({
            article_id: req.params.id
        }).then((comments) => {
            res.status(200).json({
                errno: 0,
                message: "",
                comments: comments
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

    },
    apiDelete: function (req, res, next) {

    }
}

module.exports = articlesController;