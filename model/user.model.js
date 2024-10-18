import mongoose, { Schema } from "mongoose";
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: yes,
  },
  userName: {
    type: String,
    required: yes,
  },
  password: {
    type: String,
    required: yes,
  },
});

export const userData = mongoose.model("user", userSchema);
export default userData;
