const express = require('express');

const router = express.Router();

// Home Route
router.get('/', (req, res, next) => {
    res.render('index');
});

// About Route
router.get('/about', (req, res, next) => {
    res.render('about');
});

module.exports = router;