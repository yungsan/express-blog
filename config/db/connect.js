const mongoose = require('mongoose');
const url = 'mongodb://localhost/blog';

async function connect(){
    try {
        await mongoose.connect(process.env.MONGODB_URI || url);
        console.log('Connected!');
    } catch (error) {
        throw error;
        console.log('connecting failed');
    }

}

module.exports = { connect };