const resolvers = {
  Query: {
    scores: async (parent, args, context) =>
      context.db.collection("score").find({}).toArray(),
  },
  Mutation: {
    addScore: async (parent, args, context) => {
      try {
        let result = await context.db
          .collection("scores")
          .insertOne({ ...args });
        return { result, _id: result.insetId };
      } catch (error) {
        return "Error is", error.message;
      }
    },
  },
};

module.exports = resolvers;

// This might be something helpful later
//   window.addEventListener('load', () => {
// const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

// , {username}
// const params = username ? {username} : {};
// return await Score.find({})
// is it here where we map and splice?
