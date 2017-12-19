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

router.get('/edit/:id', (req, res, next) => {
    Game.findOne({
        _id: req.params.id
    })
    .then(game => {
        res.render('./games/edit', {
            game: game
        })
    })
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

router.put('/:id', (req, res, next) => {
    Game.findOne({
        _id: req.params.id
    })
        .then(game => {
            // new values
            game.title = req.body.title,
            game.year = req.body.year,
            game.image = req.body.image,
            game.genre = req.body.genre
        
            game.save()
                .then(game => {
                    res.redirect('/games');
            })
        })
});

router.delete('/:id', (req, res, next) => {
    Game.remove({
        _id: req.params.id
    })
    .then(() => {
        res.redirect('/games')
    })
});

module.exports = router;