const express = require('express');
const ehb = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const app = express();

// Routes
const router = require('./routes/index');
const games = require('./routes/games');

app.use('/', router);
app.use('/games', games);

// Handlebars Middleware
app.engine('handlebars', ehb({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Method Override Middleware
app.use(methodOverride('_method'));

const port = 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}...`);
})