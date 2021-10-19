const { Schema, model } = require('mongoose');

const scoreSchema = new Schema({
    username: {
        type: String,
        required: true,
        // no unique and no trim?
    },
    score: {
        type: Number,
        required: true,
    }
},
{
    // I think this will help to save everything as a string and then we can parse info from string into username and score?
    toJSON: {
        getters: true
    }
}
);

const Score = model('Score', scoreSchema);
module.exports = Score;