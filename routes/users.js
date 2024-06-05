const mongoose = require("mongoose");

const plm = require("passport-local-mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  email: {
    type: String,
    required: true,
    unique: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  dp: {
    type: String,
  },
});

userSchema.plugin(plm);

const User = mongoose.model("User", userSchema);

module.exports = User;
