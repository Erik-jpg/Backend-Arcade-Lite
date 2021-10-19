const db = require('../config/connection');
const  client = new MongoClient('mongodb://localhost:27017');
const { MongoClient } = require('mongodb');

const { Score } = require('../models');

const scoreData = require('./score.json');

const Score = [
    {
        username: '',
        body: '',
    },
];

const seed = async () => {
    const connection = await client.connect().catch(console.error);
    const Score = connection.db('userScore').collection('score');
    await Score.deleteMany({}).then(console.log);
    await Score.insertMany({}).then(console.log);
    connection.close();
}
seed();

module.exports = { 
    Score,
    scoreData
};