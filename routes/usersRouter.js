const express = require('express');
const app = express.Router();
const UsersController = require('../controllers/UsersController');


app.put('/:id', UsersController.updateUser);
app.get('/:id', UsersController.detailUser);

module.exports = app;