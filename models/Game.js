const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number
    },
    image: {
        type: String
    },
    genre: {
        type: String
    }
});

mongoose.model('games', gameSchema);