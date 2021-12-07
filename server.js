const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const path = require("path");

// router
const siteRouter = require("./routes/siteRouter");
const usersRouter = require("./routes/usersRouter");

// database
const db = require("./config/db/connect");
db.connect();

// config
// app.set('port', process.env.PORT);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", siteRouter);
app.use("/users", usersRouter);

app.listen(process.env.PORT || 3000, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
