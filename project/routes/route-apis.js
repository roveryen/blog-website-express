var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const Users = require("../models/users");

router.post('/users/sign-in', function (req, res, next) {
    mongoose.connect('mongodb://nodejs-mongodb:27017/blog-website');

    Users.findOne({
        account: req.body.account
    })
        .then((user) => {
            if (user === null) {
                res.status(200)
                    .json({
                        errno: -1,
                        message: '此使用者不存在',
                    });
                res.end();
                return;
            }

            if ( user.password !== req.body.password ) {
                res.status(200)
                    .json({
                        errno: -1,
                        message: '帳號或密碼錯誤',
                    });
                res.end();
                return;
            }

            req.session.account = user.account;
            req.session.logined = true;

            //回傳status:201代表新增成功 並回傳新增的資料
            res.status(200).json({
                errno: 0,
                message: '歡迎回來'
            });

        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({
                errno: -1,
                message: err.message
            });
        });
});

router.post('/users/sign-up', function (req, res, next) {

    mongoose.connect('mongodb://nodejs-mongodb:27017/blog-website');

    Users.findOne({
        account: req.body.account
    })
        .then((check) => {
            if (check) {
                res.status(200)
                    .json({
                        errno: -1,
                        message: '此使用者已存在',
                    });
                res.end();
                return;
            }

            const user = new Users({
                account: req.body.account,
                password: req.body.password
            });

            try {
                //使用.save()將資料存進資料庫
                user.save();

                //回傳status:201代表新增成功 並回傳新增的資料
                res.status(200).json({
                    errno: 0,
                    message: '新增成功'
                });
            } catch (err) {
                //錯誤訊息發生回傳400 代表使用者傳入錯誤的資訊
                res.status(400).json({
                    errno: -1,
                    message: err.message
                });
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({
                errno: -1,
                message: err.message
            });
        });

    //res.send('This is the sign-in funciton');
});

router.post('/articles/update/:id', function (req, res, next) {
    res.send('This is the update article function');
});

router.post('/articles/delete/:id', function (req, res, next) {
    res.send('This is the delete article function');
});

router.get('/comments/:id', function (req, res, next) {
    res.send('This is the comments of article page');
});

router.post('/comments/update/:id', function (req, res, next) {
    res.send('This is the update comment function');
});

router.post('/comments/delete/:id', function (req, res, next) {
    res.send('This is the delete comment function');
});


module.exports = router;
