const express = require('express');
const router = express.Router();
const services = require('../service/usersService')

router.get('/login', services.login)

module.exports = router;
