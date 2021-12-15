const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Todo = new Schema({
    id: ObjectId,
    task: {type: String, required: true},
}, {
    timestamps: {
        createdAt: 'created at',
        updatedAt: 'updated at'
    }
})

// mongoose.model(collection_name(s), schema);
module.exports = mongoose.model('TodoLists', Todo);