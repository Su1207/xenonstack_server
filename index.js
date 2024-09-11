const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRouter = require("./routes/userAuth");
require("dotenv").config();
require("./db/db");

const app = express();
const PORT = 4000;

const allowedOrigin = ["http://localhost:5173", "http://localhost:5174"];

app.use(
  cors({
    origin: allowedOrigin,
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", authRouter);

app.listen(PORT, () => {
  console.log(`server start at port no ${PORT}`);
});
