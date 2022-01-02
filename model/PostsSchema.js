const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Post = new Schema(
  {
    id: ObjectId,
    title: { type: String, required: true },
    // content: { type: String, required: true },
    thumbnail: {type: String},
    images: { type: [] },
    size: { type: Number },
    author: {type: String, require: true},
    tags: { type: [] },
  },
  {
    timestamps: {
      createdAt: "created at",
      updatedAt: "updated at",
    },
  }
);

module.exports = mongoose.model("Posts", Post);
