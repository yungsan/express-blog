const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb://localhost/blog');
        console.log('Connected!');
    } catch (error) {
        throw error;
        console.log('connecting failed');
    }

}

module.exports = { connect };