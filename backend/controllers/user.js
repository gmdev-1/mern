const express = require('express');
const User = require('../models/user');

const create_user = (req, res) => {
    let user = new User(req.body);
    user.save()
    .then((user) => {
        res.send(user);
    })
    .catch((error) => {
        res.status(400).send("User data failed");
    })
}

module.exports = { create_user };