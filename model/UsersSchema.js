const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema(
  {
    id: ObjectId,
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: {type: String, require: true},
    role: {type: String, require: true, default: 'user'},
    avatar: {type: String, default: '/upload/low.jpg'}
  },
  {
    timestamps: {
      createdAt: "created at",
      updatedAt: "updated at",
    },
  }
);

module.exports = mongoose.model("Users", User);
