const express = require("express");
const app  = express.Router();
const SiteController = require('../controllers/SiteController');

app.get('/about', SiteController.about);
app.get('/', SiteController.index);

module.exports = app;