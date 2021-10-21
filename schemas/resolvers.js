const Score = require("../models/score");
const connection = require('../config/connection');

const resolvers = {
  Query: {
    scores: async () =>{
      await connection;
      return await Score.find({});
    }
  },
  Mutation: {
    addScore: async (parent, args) => {
      await connection;
      const dBScores = await Score.find({}).catch(console.error);
      let scoreInserted = false;
      for(let i = 0; i < dBScores.length; i++){
        if(args.score > dBScores[i].score && !scoreInserted){
          dBScores.splice(i, 0, {...args});
          dBScores.pop();
          scoreInserted = !scoreInserted;
        }
      }
      await Score.deleteMany({});
      await Score.insertMany(dBScores);
      return {...args};
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
