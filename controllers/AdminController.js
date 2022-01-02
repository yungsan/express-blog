const UsersSchema = require('../model/UsersSchema');
const PostsSchema = require('../model/PostsSchema');
const moment = require('moment');

class AdminController{
  
  async index(req, res, next){
    const users = await UsersSchema.find({});
    
    const numberOf = {
      ofAdmin: 0,
      ofMods: 0,
      ofUsers: 0,
    }
    for (const user of users){
      if (user.role === 'admin') numberOf.ofAdmin++;
      else if (user.role === 'mod') numberOf.ofMods++;
      else if (user.role === 'user') numberOf.ofUsers++;
    }
    console.log(numberOf);
    res.render('adminViews/content', {data: users, numberOf});
  }

  async detailUser(req, res, next){
    const user = await UsersSchema.findOne({ _id: req.params.id });
    const posts = await PostsSchema.find({ author: user.username }).sort({ _id: -1 });
    const fomatted_date = (date) => moment(date).format('DD-MM-YYYY');
    
    res.render('adminViews/users/detailUser', { 
      user, 
      posts,  
      fomatted_date 
    });

  }

  async updateUser(req, res, next){
    await UsersSchema.updateOne(
      { 
        _id: req.params.id 
      }, 
      {
        username: req.body.username,
        email: req.body.email,
        role: req.body.role,
        avatar: req.file.filename
      }
    );
    res.redirect('/admin')
  }

  async deleteUser(req, res, next){
    await UsersSchema.deleteOne({ _id: req.params.id });
    res.redirect('/admin');
  }
}

module.exports = new AdminController();