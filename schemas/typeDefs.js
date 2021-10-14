const { gql } = require('apollo-server');

const typeDefs = gql`
type Score {
    name: string
    points: Int
}
`;

module.exports = typeDefs;