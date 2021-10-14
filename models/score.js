const { Schema, model } = require('mongoose');

const scoreSchema = new Schema({
    name: {
        type: String,
        required: true,
        // no unique and no trim?
    },
    points: {
        type: Number,
        required: true,
    }
});

const Score = model('Score', scoreSchema);
module.exports = Score;