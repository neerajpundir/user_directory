const brcypt = require("bcrypt");
const Users = require("../models/users");

/**
 * Add User.
 * @param _req request
 * @param _res response
 */
module.exports.addUser = async (_req, _res, _next) => {
  try {
    const { username, name, email, password, status, user_image } = _req.body;
    const emailCheck = await Users.findOne({ email });

    if (emailCheck)
      return _res.json({ message: "Email already exist", status: false });

    const usernameCheck = await Users.findOne({ username });

    if (usernameCheck)
      return _res.json({ message: "Username already exist", status: false });

    const hashpassword = await brcypt.hash(password, 10);

    const users = await Users.create({
      username: username,
      name: name,
      email: email,
      password: hashpassword,
      status: status,
      user_image: user_image ?? "",
    });

    _res.json({
      status: 200,
      message: "User add Successfully",
    });
  } catch (error) {
    _next(error);
  }
};

/**
 * Get User.
 * @param _req request
 * @param _res response
 */
module.exports.getUsers = async (_req, _res, _next) => {
  try {
    const { word_no } = _req.body;
    if (word_no) {
      var letter = String.fromCharCode(word_no);
      var users = await Users.find(
        { fullname: { $regex: "^" + letter.toUpperCase() + ".*" } },
        { password: 0 }
      );
    } else {
      var users = await Users.find({}, { password: 0 });
    }

    _res.json({
      status: 200,
      users,
    });
  } catch (error) {
    _next(error);
  }
};

/**
 * Update User
 * @param _req request
 * @param _res response
 */
module.exports.updateUser = async (_req, _res, _next) => {
  try {
    const { id } = _req.params;
    const { status, contact_no, user_image } = _req.body;
    const value = {
      status: status,
      contact_no: contact_no,
      user_image: user_image,
    };

    const users = await Users.where({ _id: id }).update(value);

    _res.json({ status: 200, message: "User update Successfully", users });
  } catch (error) {
    _next(error);
  }
};
