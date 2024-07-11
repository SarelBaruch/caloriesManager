//Sarel Israel Baruch 314753666
//Ziv Ashkenazi 318778255

const express = require('express');
const router = express.Router();
const Calorie = require('../models/calories');

router.get('/report', function (req, res) {
    //Get parameters from the query string
    const year = parseInt(req.query.year);
    const month = parseInt(req.query.month);
    const user_id = parseInt(req.query.user_id);

    //Create arrays for each category
    const breakfastCalories = [];
    const lunchCalories = [];
    const dinnerCalories = [];
    const otherCalories = [];

    //Find in DB collection the specific calories by filter
    Calorie.find({year: year, month: month, user_id: user_id})
        .then((calories) => {
            calories.forEach(calorie => {
                const {day, description, amount} = calorie;
                const newCalorie = {day, description, amount};

                //Adding each calorie to the correct category
                if (calorie.category.toString() === 'breakfast') breakfastCalories.push(newCalorie);
                else if (calorie.category.toString() === 'lunch') lunchCalories.push(newCalorie);
                else if (calorie.category.toString() === 'dinner') dinnerCalories.push(newCalorie);
                else otherCalories.push(newCalorie);
            })
            //Response in Json format
            res.status(200).json({
                breakfast: breakfastCalories,
                lunch: lunchCalories,
                dinner: dinnerCalories,
                other: otherCalories
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(400).send('Failed to get report');
        });

});

module.exports = router;