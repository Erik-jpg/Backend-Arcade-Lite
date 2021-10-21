const { ApolloServer } = require("apollo-server");
const { typeDefs, resolvers } = require("./schemas");
const connection = require("./config/connection");
require("dotenv").config();

const app = async () => {
  try {
    await connection;
    console.log("Connected to MongoDB");
  } catch {
    (err) => console.log(err);
  }

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    formatError: (err) => {
      console.error("Error in apollo: ", err);
      return err;
    },
  });
  server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => console.log(`Server ready at ${url}`));
};

app();
