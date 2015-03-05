/**
 * Created by Ross on 2/26/15.
 */
var Song = require('../models/Song.js');

exports.songList = function (req, res, next) {
        Song.find(function (err, songs) {
            if (err) return next(err);
            res.json(songs);
        });
    };

exports.create = function(req, res, next) {
    Song.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
}

exports.songId = function(req, res, next) {
    Song.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
}

exports.delete =  function(req, res, next) {
    Song.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
}

exports.putId = function(req, res, next) {
    Song.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
}