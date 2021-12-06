const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;


const User = new Schema({
  id: ObjectId,
  name: {type: String, required: true},
  email: {type: String, match: emailRegexp, default: 'dont have the email'},
  createAt: {type: Date, default: Date.now},
  updateAt: {type: Date, default: Date.now},
});

module.exports = mongoose.model('Users', User);
