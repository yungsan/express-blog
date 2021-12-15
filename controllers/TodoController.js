const TodoSchema = require("../model/TodoSchema");
const UsersSchema = require("../model/UsersSchema");

class TodoController {
  
  async index(req, res) {
    // get token verified form header
    const user = await UsersSchema.findOne({_id: req.userID.id});
    console.log('login as', user.username)

    const data = await TodoSchema.find({});
    res.render("todo", { title: "Todo List", data, username: user.username});
  }

  // [GET] /todo/addTask
  addTask(req, res) {
    TodoSchema.create(req.query, (err) => {
      if (err) return res.json(err);
      res.redirect("/todo");
    });
  }

  // [GET] /todo/completeTask?:id
  completeTask(req, res) {
    TodoSchema.deleteOne({ _id: req.query.id }, (err) => {
      if (err) {
        console.log("err");
        return res.json(err);
      }
      res.redirect("/todo");
    });
  }

  // [GET] /todo/detailTask?:id
  detailTask(req, res) {
    const data = TodoSchema.find({ _id: req.query.id }, (err, target) => {
      if (err) return res.json(err);
      res.render("detailTodo", { data: target[0] });
    });
  }

  // [GET] /todo/editTask?:id
  async editTask(req, res) {
    await TodoSchema.updateOne({ _id: req.query.id }, { task: req.query.task });
    res.redirect('/todo');
  }
}

module.exports = new TodoController();
