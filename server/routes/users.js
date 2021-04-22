const { validate } = require('../models/user');
const mySqlCon = require("../db/mysqlcon");
const express = require('express');
const router = express.Router();
router.post('/', async (req, res) => {
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        created_at: new Date()
    }
    const { error } = validate(user);
    if (error) return res.status(400).send(error.details[0].message);
    var sql = `SELECT * FROM users WHERE email=?`;
    mySqlCon.query(sql, [user.email], function (err, result) {
        if (err) {
            return res.status(500).send('Something failed.');
        }
        if (result.length > 0) {
            return res.status(400).send('User already registered.');
        }
        res.send("created");
    });
})
module.exports = router;
