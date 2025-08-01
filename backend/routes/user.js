const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/user');

router.get('/', userControllers.create_user);

module.exports = router;