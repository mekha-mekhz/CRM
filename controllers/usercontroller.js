require("dotenv").config();
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const User = require("../models/usermodel");

exports.createuser = async (req, res) => {
  try {
    const { firstname, lastname, email, username, password, usertype } =
      req.body;
    const hashedpassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      firstname,
      lastname,
      email,
      username,
      password: hashedpassword,
      usertype,
    });
    await newUser.save();
    res
      .status(200)
      .json({ message: "user register successfully", user: newUser });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
exports.loginuser = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "user not found" });
    }
    const ismatch = await bcrypt.compare(password, user.password);
    if (!ismatch) {
      return res.status(400).json({ message: "invalid password" });
    }
    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
        usertype: user.usertype,
      },
      process.env.secretkey
    );
    return res.status(200).json({ message: "login successfull", token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.getprofile = (req, res) => {
  console.log(req.user);
  return res.status(200).json({ message: "sucess", user: req.user });
};

exports.logoutuser = (req, res) => {
  res.clearCookie("token");
  console.log(res.cookie.token);
  res.status(200).json({ message: "logged out successfully" });
};
