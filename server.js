const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const path = require("path");
const cookieParser = require('cookie-parser');

// database
const db = require("./config/db/connect");
db.connect();

// config
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser('secret'));

// router
const siteRouter = require("./routes/siteRouter");
const todoRouter = require("./routes/todoRouter");
const loginRouter = require('./routes/login/loginRouter');
const verifyToken = require('./routes/login/verifyToken');

app.use("/", siteRouter);
app.use('/todo', verifyToken, todoRouter);
app.use('/account', loginRouter);



app.listen(process.env.PORT || 3000, function () {
  console.log(
    "Express server listening on port %d in %s mode:\nhttp://localhost:%s",
    this.address().port,
    app.settings.env,
    this.address().port
  );
});
