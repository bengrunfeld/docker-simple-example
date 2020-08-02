const express = require("express");
// const mongodb = require("mongodb");
// const config = require("./data");

const app = express();
const PORT = 4000;
// const client = mongodb.MongoClient;

// client.connect(config.DB, { useNewUrlParser: true }, (err, db) => {
//   if (err) {
//     console.log("database is not connected");
//   } else {
//     console.log("connected!!");
//   }
// });

app.get("/", (req, res) => {
  res.json(`${process.env.MESSAGE}. I love docker!`);
});

app.listen(PORT, () => {
  console.log("Your server is running on PORT:", PORT);
});
