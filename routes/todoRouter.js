const express = require('express');
const app = express.Router();
const TodoController = require('../controllers/TodoController');

app.get('/editTask?:params', TodoController.editTask);
app.get('/detailTask?:id', TodoController.detailTask);
app.get('/completeTask?:id', TodoController.completeTask);
app.get('/addTask', TodoController.addTask);
app.get('/', TodoController.index);

module.exports = app;