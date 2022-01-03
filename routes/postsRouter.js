const express = require("express");
const app = express.Router();
const PostsController = require("../controllers/PostsController");
const isLogin = require("../auth/isLogin");
const upload = require("../upload");

app
  .route('/editPost/:id')
  .get(PostsController.editPostRender)
  .put(PostsController.editPost);

app
  .route("/detailPost/:id")
  .get(PostsController.detailPost)
  .delete(PostsController.deletePost);

app
  .route("/newPost")
  .get(isLogin, PostsController.newPost)
  .post(upload.array("images", 69), PostsController.createPost);
app.get("/", PostsController.index);

module.exports = app;
