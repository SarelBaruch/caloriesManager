//Sarel Israel Baruch 314753666
//Ziv Ashkenazi 318778255

const express = require('express');
const router = express.Router();

router.get('/about', function(req, res) {
    //Array with developers details
    const developers = [
        {'firstname': 'sarel israel', 'lastname': 'baruch', 'id': 314753666, 'email': 'sarelb25@gmail.com'},
        {'firstname': 'ziv', 'lastname': 'ashkenazi', 'id': 318778255, 'email': 'zivashkenazi5@gmail.com'}
    ];

    //Response in JSON format
    res.status(200).json(developers);
});

module.exports = router;
