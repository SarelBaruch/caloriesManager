//Sarel Israel Baruch 314753666
//Ziv Ashkenazi 318778255

const mongoose = require('mongoose');
const { Schema } = mongoose;

//create calorie schema
const caloriesSchema = new Schema({
    user_id: {
        type: Number
    },
    id: {
        type: String
    },
    year: {
        type: Number
    },
    month: {
        type: Number
    },
    day: {
        type: Number
    },
    description: {
        type: String
    },
    amount: {
        type: Number
    },
    category: {
        type: String
    }
});

//Calorie model to DB collection called calories by this schema structure
const Calorie = new mongoose.model('calories', caloriesSchema);

module.exports = Calorie;