const express = require('express');
const { login,signup } = require('../controller/AuthController');
const router = express.Router();


router.get('/login',login)
router.get('/signup',signup)

module.export = router;