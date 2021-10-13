const { Score } = require('../models');

const resolvers = {
    Query: {
        score: async () => {
            return await Score.find({})
            // is it here where we map and splice?
        }
    }
};

module.exports = resolvers;