var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Orrange' });
});

//GET Beta Site
router.get('/beta', function(req, res, next) {
    res.render('beta', { title: 'orrange Beta' });
});

module.exports = router;
