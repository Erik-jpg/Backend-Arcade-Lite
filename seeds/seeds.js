const db = require("../config/connection");
const { Score } = require("../models");

db.once("open", async () => {
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
    ]);

    console.log("Scores seeded!");
  } catch (err) {
    console.log(err);
  }

  process.exit();
});
