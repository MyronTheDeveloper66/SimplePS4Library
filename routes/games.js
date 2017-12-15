const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
// load the model
require('../models/Game');
const Game = mongoose.model('games');

router.get('/', (req, res, next) => {
    Game.find({})
        .sort({title: 'asc'})
        .then(games => {
            res.render('./games/games', {
                games: games
            });
    })
});

router.get('/add', (req, res, next) => {
    res.render('./games/add');
});

router.post('/', (req, res, next) => {
    const newGame = {
        title: req.body.title,
        year: req.body.year,
        image: req.body.image,
        genre: req.body.genre
    };
    new Game(newGame)
        .save()
        .then(game => {
            res.redirect('./games');
        });
});

module.exports = router;