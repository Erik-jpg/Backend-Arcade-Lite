const { Score } = require('../models');

const resolvers = {
    Query: {
        Score: async () => {
            return await Score.find({})
            // is it here where we map and splice?
        }
    },
    Mutation: {
        addNewScore: async (_, args) => {
            try {
                let response = await Score.create(args);
                return response;
            } catch(e) {
                return e.message;
            }
        }
    }
};

module.exports = { resolvers, Score };

