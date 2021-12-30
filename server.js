const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const path = require("path");
const cookieParser = require('cookie-parser');
var morgan = require('morgan')
const methodOverride = require('method-override')

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
app.use(morgan('common'));
app.use(methodOverride('_method'));

// router
const siteRouter = require("./routes/siteRouter");
const postsRouter = require('./routes/postsRouter');
const loginRouter = require('./routes/loginRouter');
const adminRouter = require('./routes/adminRouter');
const isLogin = require('./auth/isLogin');
const isAdmin = require('./auth/isAdmin');

app.use("/", siteRouter);
app.use('/account', loginRouter);
app.use('/admin', isLogin, isAdmin, adminRouter);
app.use('/posts', postsRouter);


app.listen(process.env.PORT || 3000, function () {
  console.log(
    "Express server listening on port %d in %s mode:\nhttp://localhost:%s",
    this.address().port,
    app.settings.env,
    this.address().port
  );
});
