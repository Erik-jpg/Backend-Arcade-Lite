const { gql } = require('apollo-server');


const typeDefs = gql`
type Query { 
    getScore: Score
}

type Mutation {
    addNewScore(userName: String!, points: Int): Score
}
`;



module.exports = typeDefs;