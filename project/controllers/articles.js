
const modelArticles = require("../models/articles");
const modelComments = require("../models/comments");

const Articles = new modelArticles();
const Comments = new modelComments();

const articlesController = {
    
    apiList: function (req, res, next) {
                
        Articles.find([
            ['status','=','1']
        ], (err, articles) => {
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
                articles: articles
            });
        });

    },
    apiUpdate: function (req, res, next) {        

        Articles.updateOrCreate({
            id: req.params.id
        }, {
            title: req.body.title,
            content: req.body.content,
            author_id: req.session.userId,
        },  (err, article) => {

            if ( err ) {
                console.log(err);
                res.status(400).json({
                    errno: -1,
                    message: err.message
                });
                return;
            }

            // let message = "Successfully updated";
            res.status(200).json({
                errno: 0,
                message: "Successfully updated"
            });
                        
        });
    },
    apiDelete: function (req, res, next) {
        /*
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
        */
    },
    detail: function (req, res, next) {        
        Articles.findById(req.params.id, (err, article) => {
            if ( err ) {
                console.log(err);
                res.status(400).json({
                    errno: -1,
                    message: err.message
                });
                return;
            }
        });
    },
    create: function (req, res, next) {
        const article = new modelArticles;
        article.id = 0;
        res.render("articles/edit", {article: article});
    },
    modify: function (req, res, next) {
        
        Articles.findById(req.params.id, (err, article) => {
            if ( err ) {
                console.log(err);
                res.render("error", {
                    error: err,
                    message: err.message
                });
                return;
            }
            res.render("articles/edit", {article: article});
        });
    }
};

module.exports = articlesController;