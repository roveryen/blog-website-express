const middlewares = {
    loginRequired: function (req, res, next){        
        if ( null == req.session.logined || false === req.session.logined ) {
            //res.send('請先登入!');
            res.redirect('/users/sign-in');
            res.end();
            return;
        }
        next();
    }
}
module.exports = middlewares;