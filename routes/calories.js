//Sarel Israel Baruch 314753666
//Ziv Ashkenazi 318778255

const express = require('express');
const router = express.Router();
const Calorie = require('../models/calories');
const { v4: uuidv4 } = require('uuid');


router.post('/addcalories/', function (req, res) {
    //Check if all required parameters filled up in request body
    const isMissingParams = checkMissingParams(req.body);

    if (isMissingParams.length > 0) {
        let missingParams = `please enter the following parameters: ${isMissingParams}`;
        res.status(400).send(missingParams);
        return;
    }

    //Check if the filled-up category is valid
    if (!isValidCategory(req.body.category)) {
        res.status(400).send('Please enter a valid category');
        return;
    }

    //Get the parameters from request body
    const {user_id, year, month, day, description, category, amount} = req.body;
    //Create calorie object
    const calorieToAdd = {user_id, year, month, day, id:uuidv4(), description, category, amount};

    //Add this calorie to the collection
    Calorie.create(calorieToAdd)
        .then(() => {
            res.status(200).send('The calorie added successfully');
        })
        .catch(() => {
            res.status(400).send('Error creating Calorie');
        });
});

//Get the missing required parameters
function checkMissingParams(reqBody) {
    const requiredParams = ['amount', 'category', 'description', 'user_id'];
    let missingParams = [];

    requiredParams.forEach(param => {
        if (!reqBody[param]) {
            missingParams.push(param);
        }
    });

    return missingParams;
}

//Check valid category
function isValidCategory(category) {
    const validCategory = ['breakfast', 'lunch', 'dinner', 'other'];

    return validCategory.includes(category);
}

module.exports = router;