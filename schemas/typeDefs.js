const { gql } = require("apollo-server");

const typeDefs = gql`
type Score {
    _id: ID
    username: String
    score: Int
}

type Query { 
    scores: [Score]
}

mutation Mutation($username: String!, $score: Int!) {
  addScore(username: $username, score: $score) {
    username
    score
  }
}
`;

module.exports = typeDefs;