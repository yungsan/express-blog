const express = require('express');
const app = express.Router();
const PostsController = require('../controllers/PostsController');
const isLogin = require('../auth/isLogin');
const upload = require('../upload');

app.delete('/detailPost/:id', PostsController.deletePost);
app.get('/detailPost/:id', PostsController.detailPost);
app.route('/newPost')
  .get(isLogin, PostsController.newPost)
  .post(upload.array('images', 69), PostsController.createPost);
app.get('/', PostsController.index);

module.exports = app;