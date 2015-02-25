var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Song = require('../models/Song.js');

/* GET /songs listing. */
router.get('/', function(req, res, next) {
    Song.find(function (err, songs) {
        if (err) return next(err);
        res.json(songs);
    });
});

/* POST /songs */
router.post('/', function(req, res, next) {
    Song.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* GET /songs/id */
router.get('/:id', function(req, res, next) {
    Song.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* PUT /songs/:id */
router.put('/:id', function(req, res, next) {
    Song.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE /songs/:id */
router.delete('/:id', function(req, res, next) {
    Song.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;
