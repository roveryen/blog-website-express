
const Comments = require("../models/comments");

const commentsController = {
    apiList: function (req, res, next) {
        
        Comments.find([
            ['article_id', '=', req.params.id],
        ], (err, comments) => {
            if ( err ) {
                console.log(err);
                res.status(400).json({
                    errno: -1,
                    message: err.message
                });
                return;
            }

            res.status(200).json({
                errno: 0,
                message: "",
                comments: comments
            });
        });

    },
    apiUpdate: function (req, res, next) {

    },
    apiDelete: function (req, res, next) {

    }
}

module.exports = commentsController;