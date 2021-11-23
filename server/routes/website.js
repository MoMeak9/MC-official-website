const express = require('express');
const router = express.Router();
const services = require('../service/websiteService')

router.get('/getArticle', services.getArticle)

module.exports = router;
