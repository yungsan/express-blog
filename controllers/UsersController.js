const fetch = require("node-fetch");
const UsersSchema = require("../model/UsersSchema");

class UsersController {
  // [GET] /users
  index(req, res, next) {
    UsersSchema.find({})
      .then((users) =>
        res.render("users", {
          title: "users",
          message: "users page",
          data: users,
        })
      )
      .catch(next);
  }

  // [GET] /users/new
  newUser(req, res) {
    res.render("createUser", { title: "add new", message: "add new" });
  }

  // [POST] /users/create
  create(req, res) {
    UsersSchema.create({ 
      
      name: req.body.name,
      email: req.body.email,

    }, function (err, user) {
      if (err) return handleError(err);
      console.log("inserted ", user);
      res.redirect("/users");
    });
  }

  // [GET] /users/:id
  detail(req, res, next) {
    UsersSchema.find({ _id: req.query.id })
      .then((user) => {
        console.log(user);
        res.render("detailUser", {
          title: "users",
          message: "users page",
          data: user[0],
        });
      })
      .catch(next);
  }

  // [POST] /users/update
  update(req, res, next) {
    if (req.query.email === '') return res.json(res.query)
    console.log('update ', req.query)
    UsersSchema.findById(req.query.id, (err, user) => {
      if(err) return res.json({err})
      
      user.name = req.query.name
      user.email = req.query.email

      user.save().then(res.redirect("/users"));
  
    })
      
  }

  // [GET] /users/delete
  delete(req, res, next) {
    console.log("deleted id: ", req.query.id);

    UsersSchema.findByIdAndRemove(req.query.id, function (err) {
      if (err) return handleError(err);
      res.redirect("/users");
    });
  }
}

module.exports = new UsersController();
