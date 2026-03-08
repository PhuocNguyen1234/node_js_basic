const express = require('express');
const router = express.Router();
const {getHomePage, getABC, getHuuPhuoc} = require('../controllers/homeController')

router.get('/', getHomePage);

router.get('/abc', getABC);

router.get('/huuphuoc', getHuuPhuoc);

module.exports = router;