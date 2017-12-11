const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('./games/games');
});

router.get('/add', (req, res, next) => {
    res.render('./games/add');
});

module.exports = router;