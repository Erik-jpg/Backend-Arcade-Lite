const { ApolloServer } = require("apollo-server");
const { MongoClient } = require("mongodb");
const { typeDefs, resolvers } = require('./schemas');
require('dotenv').config();

const client = new MongoClient(process.env.MONGODB_URI);

const app = async () => {
  const connection = await client.connect().catch(console.error);
  const db = connection.db("Arcade-lite");
  console.log("Connected to MongoDB")
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: { db },
    formatError: (err) => {
      console.error("Error in apollo: ", err);
      return err;
    },
  });
  server.listen().then(({ url }) => console.log(`Server ready at ${url}`));
};

app();
