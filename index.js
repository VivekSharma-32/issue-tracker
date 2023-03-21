const express = require("express");
const morgan = require("morgan");
const IssueRoutes = require("./src/routes/issueRoutes");
require("dotenv").config();
const connectToDB = require("./src/db/config");

const app = express();

// mongodb connection
connectToDB();

// middlewares
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/", IssueRoutes);

const PORT = process.env.PORT || 8000;

app.listen(() => {
  console.log(`Server is running on Port ${PORT}`);
});
