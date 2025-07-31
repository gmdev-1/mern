const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/user');

router.post('/', userControllers.create_user);

module.exports = router;