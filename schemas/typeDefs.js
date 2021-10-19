const { gql } = require('apollo-server');


const typeDefs = gql`
type username {
    username: String
}

type Score {
    getScore: Int
}

type Query { 
    username: String
    getScore: Int
}

type Mutation {
    newScore:
        newUser: username: String! : Score
        newScore: points: Int : Score
        
}
`;



module.exports = typeDefs;