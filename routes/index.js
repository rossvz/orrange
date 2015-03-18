var express = require('express');
var router = express.Router();
var app = require('../app');
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Orrange' });
});
//
//router.get('/#/signup', function(req, res, next) {
//    res.render('signup', { title: 'Orrange' });
//});
//
//router.get('/#/login', function(req, res, next) {
//    res.render('login', { title: 'Orrange' });
//});
//
//router.get('/#/profile', function(req, res, next) {
//    res.render('profile', { title: 'Orrange' });
//});

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/#/profile', // redirect to the secure profile section
    failureRedirect : '/#/signup', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));

router.post('/login', passport.authenticate('local-login', {
    successRedirect : '/#/profile', // redirect to the secure profile section
    failureRedirect : '/#/login', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));




// app/routes.js
module.exports = function(app, passport) {




    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user : req.user // get the user out of session and pass to template
        });
    });

    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}



module.exports = router;
