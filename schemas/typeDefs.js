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

type Mutation {
    addScore(username:String!, score:Int!): Score  
}
`;

module.exports = typeDefs;