const { ApolloServer } = require("apollo-server");
const { typeDefs, resolvers } = require('./schemas');
const connection = require('./config/connection');
require('dotenv').config();


const app = async () => {
  await connection;
  // const db = connection.db("Arcade-lite");
  console.log("Connected to MongoDB")
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    // context: { db },
    formatError: (err) => {
      console.error("Error in apollo: ", err);
      return err;
    },
  });
  server.listen().then(({ url }) => console.log(`Server ready at ${url}`));
};

app();
