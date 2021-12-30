const UsersSchema = require("../model/UsersSchema");

module.exports = async function (req, res, next) {
  try {
    const getUser = await UsersSchema.findOne({ _id: req.userID.id });
    const getRole = getUser.role;

    getRole === 'admin' ? next() : res.json('you dont have permission to access!');
    
  } catch (error) {
    console.log("Error when authentication --> /account");
    res.redirect("/account");
  }
};
