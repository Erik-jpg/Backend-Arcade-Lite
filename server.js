const mongoose = require('mongoose');
const { ApolloServer} = require('apollo-server');
const {typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
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
    await connection;
    server.listen().then(({ url }) => {
        console.log(`🚀  Server ready at ${url}`);
      });      
}

const client = new ApolloClient({ 
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache(),
});


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

// adding this so that I can attempt to push to main and actually 
// have something to merge my branch with because git push stops me,
// ErikBranch has no upstream branch. seesh. 
// all the files I have made are in a backup incase this gets removed, please no.
