const connection = require("../config/connection");
const { Score } = require("../models");

const seed = async() => {
  await connection;
  try {
    await Score.deleteMany();
    const scores = await Score.insertMany([
      {
        username: "AKN",
        score: 999999,
      },
      {
        username: "MAC",
        score: 999999,
      },
      {
        username: "KLN",
        score: 999999,
      },
      {
        username: "RYN",
        score: 999999,
      },
      {
        username: "ONE",
        score: 0,
      },
      {
        username: "TWO",
        score: 0,
      },
      {
        username: "THR",
        score: 0
      },
      {
        username: "FOR",
        score: 0
      },
      {
        username: "FIV",
        score: 0
      }
    ]);

    console.log("Scores seeded!");
  } catch (err) {
    console.log(err);
  }

  process.exit();
}

seed();