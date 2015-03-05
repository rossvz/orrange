var express = require('express');
var router = express.Router();
var requestsModule = require('./requestsModule')
var mongoose = require('mongoose');
var Song = require('../models/Song.js');

/* GET /songs listing. */
router.get('/', requestsModule.songList);

/* POST /songs */
router.post('/', requestsModule.create);

/* GET /songs/id */
router.get('/:id', requestsModule.songId);

/* PUT /songs/:id */
router.put('/:id', requestsModule.putId);

/* DELETE /songs/:id */
router.delete('/:id', requestsModule.delete);

module.exports = router;
