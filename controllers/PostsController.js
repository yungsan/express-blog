const UsersSchema = require('../model/UsersSchema');
const PostsSchema = require('../model/PostsSchema');
const moment = require('moment');
const fs = require('fs');

class PostsController{
  
  async index(req, res, next){
    try {
      
      const data = await PostsSchema.find({}).sort({ _id: -1 });
      const fomatted_date = (date) => moment(date).format('DD-MM-YYYY');
      res.render('postsView/posts', { data,  date: fomatted_date });

    } catch (error) {
      res.json(error);
    }
  }

  async newPost(req, res, next){
    const author = await UsersSchema.findOne({ _id: req.userID.id });
    res.render('postsView/newPost', { author: author.username });
  }

  async createPost(req, res, next){
    try{

      req.body.thumbnail = req.files[0].filename;
      req.body.images = req.files.map(file => file.filename);
      req.body.size = req.body.images.length;
      await PostsSchema.create(req.body);
      res.redirect('/posts');

    } catch(error){
      return res.json(error);
    }
  }

  async detailPost(req, res, next){
    try{
      const data = await PostsSchema.findOne({ _id: req.params.id });
      res.render('postsView/detailPost', { data });
    } catch(error){
      res.json(error);
    }
  }

  async deletePost(req, res, next){
    try{
      await PostsSchema.deleteOne({ _id: req.params.id });
      res.redirect('back');
    } catch(error){
      res.json(error);
    }
  }

}

module.exports = new PostsController();