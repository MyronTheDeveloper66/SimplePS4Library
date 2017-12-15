const express = require('express');
const ehb = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const app = express();

// Map global promise - get rid of warning
mongoose.Promise = global.Promise;

// Connect to mLab
mongoose.connect('mongodb://ChillDudeLegend:78mc19@ds135966.mlab.com:35966/gamelibrary', 
{ useMongoClient: true })
    .then(()=> console.log('Connected to database...'))
    .catch(err => console.error(err));

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

// Routes
const router = require('./routes/index');
const games = require('./routes/games');

app.use('/', router);
app.use('/games', games);

const port = 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}...`);
})