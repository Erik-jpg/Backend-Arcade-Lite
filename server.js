// const mongoose = require('mongoose');
const { ApolloServer} = require('apollo-server');
const {typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const client = new MongoClient("mongodb://localhost27017")

const PORT = process.env.PORT || 3001;
// const app = express();
const server = new ApolloServer({ 
    typeDefs, resolvers
});

server.applyMiddleware({ app });

app.use(
    // solved uses: express.urlencoded({ extended: false });
)

app.use(
    // express.json()
);

const app = async () => {
    const connection = await Client.connect().catch(console.error);
    const db = connection.db('scores')
    const server = new ApolloServer({ 
        typeDefs, 
        resolvers,
        context: { db },
        formatError: error => {
        console.error('error in apollo: ', error);
        return error;
    },
    });
    server
        .listen()
        .then(({ url }) => {console.log(`🚀  Server ready at ${url}`)
      });
    }      





app();

// import React from 'react';
// const { ApolloServer } = require('apollo-server');
// const { connection } = require('./config/connection');
// const resolve = require('./resolvers');
// const typeDefs = require('./typeDefs');
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

// const server = new ApolloServer({ typeDefs, resolvers });
