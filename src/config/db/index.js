// config db
// create a function to Connect trong db

// import mongoose
const mongoose = require('mongoose');

// await phải nằm trong function async


async function connectToDB () {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev');
        console.log('Connect to DB successfully');
    }
    catch (error){
        console.log('Connect to DB Failure');
    }
}


module.exports = {connectToDB};