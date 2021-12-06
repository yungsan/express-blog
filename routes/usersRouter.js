const express = require("express");
const app  = express.Router();
const UsersController = require('../controllers/UsersController');


app.get('/detail?:id', UsersController.detail)
app.get('/update?:params', UsersController.update)
app.get('/delete?:id', UsersController.delete);
app.post('/create', UsersController.create);
app.get('/new', UsersController.newUser);
app.get('/', UsersController.index);



module.exports = app;