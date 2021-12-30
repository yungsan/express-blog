const express = require("express");
const app  = express.Router();
const LoginController = require('../controllers/LoginController');

app.get('/logout', LoginController.logout);
app.route('/register')
    .get(LoginController.indexRegisterGet)
    .post(LoginController.indexRegisterPost);
app.route('/')
    .get(LoginController.indexLoginGet)
    .post(LoginController.indexLoginPost);

module.exports = app;