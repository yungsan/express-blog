const UsersSchema = require("../model/UsersSchema");
const jwt = require("jsonwebtoken");

class LoginController {
  // [GET] /login
  async indexLoginGet(req, res) {
    console.log("/login");
    
    try {
    
      const who = jwt.verify(req.signedCookies.loginToken, process.env.TOKEN);
      console.log(who);
    
      const loggedUser = await UsersSchema.findOne({ _id: who.id });
      console.log('loggedUser', loggedUser)
      
      if (loggedUser.role !== 'admin')
        return res.redirect(`/users/${loggedUser._id}`);
      
      res.redirect("/admin");

    } catch (err) {
      console.log("Do not login --> /account");
      res.render("login", { title: "Login form" });
    }
  }

  // [POST] /login
  indexLoginPost(req, res) {
    UsersSchema.findOne(req.body, (err, user) => {
      if (user) {
        const token = jwt.sign({ id: user._id }, process.env.TOKEN);

        // set cookie
        res.cookie("loginToken", token, { signed: true });

        return res.redirect("/");
      }

      res.status(500).json("Wrong username OR password!");
    });
  }

  // [GET] /register
  indexRegisterGet(req, res) {
    res.render("register", { title: "Register form" });
  }

  // [POST] /register
  async indexRegisterPost(req, res) {
    const username = await UsersSchema.findOne({ username: req.body.username });
    const email = await UsersSchema.findOne({ email: req.body.email });
    // check valid
    if (username) return res.status(500).send("Account already exists!");
    if (email) return res.status(500).send("Email already exists!");

    // create a user
    UsersSchema.create(
      {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      },
      (err) => {
        if (err) return res.json(err);

        res.redirect("/account");
      }
    );
  }

  // [POST] /logout
  logout(req, res){
    res.clearCookie('loginToken');
    res.redirect('/account');
  }

}

module.exports = new LoginController();
