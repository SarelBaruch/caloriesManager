//Sarel Israel Baruch 314753666
//Ziv Ashkenazi 318778255

const express = require('express');
const router = express.Router();
const User = require('../models/users');

router.get('/users/:id', function(req, res) {
    //Get id parameter from the query string
    const id = parseInt(req.params.id);

    //Find in DB collection the specific user
    User.find({id: id}).then((users) => {
        //If there are no user with this id
        if (users.length === 0) {
            res.status(400).send('No users found.');
            return;
        }
        const {id, first_name, last_name, birthday} = users[0];
        const user = {id, first_name, last_name, birthday};
        //Response in JSON format
        res.status(200).json(user);

    }).catch((err) => {
        console.log(err);
        res.status(400).send('Failed to get user data');
    });

});

module.exports = router;
