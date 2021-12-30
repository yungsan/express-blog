const express = require('express');
const AdminController = require('../controllers/AdminController');
const app = express.Router();
const upload = require('../upload');

app.route('/user/:id')
  .get(AdminController.detailUser)
  .delete(AdminController.deleteUser)
  .put(upload.single('avatar'), AdminController.updateUser);
app.get('/', AdminController.index);

module.exports = app;