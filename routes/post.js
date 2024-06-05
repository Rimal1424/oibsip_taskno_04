const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://darshilmaniya05:0lxCxyLZSAnO5QOo@cluster0.2cehxaw.mongodb.net/pinterest-data"
);

const postSchema = new mongoose.Schema({
  imgText: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: Array,
    default: [],
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
