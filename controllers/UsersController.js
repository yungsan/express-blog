const UsersSchema = require('../model/UsersSchema');
const PostsSchema = require('../model/PostsSchema');
const moment = require('moment');

class UsersController{
  
  async detailUser(req, res, next){
    const user = await UsersSchema.findOne({ _id: req.params.id });
    const posts = await PostsSchema.find({ author: user.username }).sort({ _id: -1 });
    const fomatted_date = (date) => moment(date).format('DD-MM-YYYY');
    
    res.render('me', { 
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
      }
    );
    res.redirect('/account');
  }

}

module.exports = new UsersController();