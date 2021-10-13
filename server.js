// import React from 'react';
const { ApolloServer } = require('apollo-server');
const { connection } = require('./db/connection');
const resolve = require('./resolvers');
const typeDefs = require('./typeDefs');
// const {
//     ApolloClient,
//     InMemoryCache,
//     ApolloProvider,
//     useQuery,
//     gql
//   } = require("@apollo/client");
// import InMemoryCache from '@apollo/client';
// import gql from '@apollo/client';  
// import resolvers from '@apollo/client';

// const typeDefs = gql;

const server = new ApolloServer({ typeDefs, resolvers });

const app = async () => {
    await connection;
    server.listen().then(({ url }) => {
        console.log(`🚀  Server ready at ${url}`);
      });      
}

// const client = new ApolloClient({ 
//     uri: 'http://localhost:4000/',
//     cache: new InMemoryCache(),
// });


app();