require("./src/connection/conn");
require("dotenv").config();

const UserRouter = require("./src/routes/users-route");

const express = require("express");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());

app.use("/api/user", UserRouter);

const server = app.listen(port, () => {
  console.log(`Server Started on Port ${port}`);
});
