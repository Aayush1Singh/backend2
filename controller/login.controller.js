import data from "../views/login.js";
import connectDB from "../db/index.js";
import user from "../model/user.model.js";

const registerUser = function (req, res) {
  if (!data.userName || !data.password) {
    throw Error("password or login not recieved in controller view");
  }
  if (
    user.findOne({
      $or: [{ userName }],
    })
  ) {
    throw new Error("user already found");
  }

  const newUser = user.create({
    fullName: data.fullName,
    password: data.password,
  });
  if (newUser)
    res.status(200).json({
      message: "ok",
    });
};
const loginUser = function (req, res) {
  if (!data.userName || !data.password) {
    throw Error("password or login not recieved in controller view");
  }
  if (
    user.findOne({
      $and: [{ userName }, { password }],
    })
  ) {
    //login him
  }
};
console.log("data");
if (data.username || data.password) {
  console.log("intit");
  registerUser();
}
export { registerUser };
