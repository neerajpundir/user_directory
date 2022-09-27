const express = require("express");
const UserRouter = express.Router();
const {
  addUser,
  getUsers,
  updateUser,
} = require("../controller/usersController");

UserRouter.post("/register", addUser);
UserRouter.post("/get_users", getUsers);
UserRouter.get("/edit_user/:id", updateUser);

module.exports = UserRouter;
