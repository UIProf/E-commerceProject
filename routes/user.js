const express = require('express');
const router = express.Router();

const { singup } = require('../controllers/user');

router.get('/singup', singup);

module.exports = router;