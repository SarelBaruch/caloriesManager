//Sarel Israel Baruch 314753666
//Ziv Ashkenazi 318778255

const mongoose = require('mongoose');
const { Schema } = mongoose;

//create user schema
const usersSchema = new Schema({
    id: {
        type: Number
    },
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    birthday: {
        type: String
    }
});

//User model to DB collection called users by this schema structure
const User = new mongoose.model('users', usersSchema);

module.exports = User;