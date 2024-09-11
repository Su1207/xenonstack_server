const mongoose = require("mongoose");

const db = process.env.MONGODB_URL;

mongoose
  .connect(db)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("err", err);
  });
