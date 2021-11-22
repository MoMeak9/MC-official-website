const express = require('express');
const router = express.Router();
const services = require('../service/websiteService')

router.get('/addReadTimes', services.addReadTime)

router.get('/query', services.queryReadTime)

module.exports = router;
