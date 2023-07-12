const middlewares = {
    loginRequired: function (req, res, next){
        if ( false === req.session.logined ) {
            res.send('請先登入!');
            res.end();
            return;
        }
        next();
    }
}
module.exports = middlewares;