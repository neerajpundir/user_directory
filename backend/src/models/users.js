const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: false,
    },
    status: {
      type: Boolean,
      default: false,
    },
    contact_no: {
      type: String,
      required: false,
    },
    gender: {
      type: String,
      required: false,
    },
    dob: {
      type: String,
      required: false,
    },
    nationality: {
      type: String,
      required: false,
    },
    user_image: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userSchema);
