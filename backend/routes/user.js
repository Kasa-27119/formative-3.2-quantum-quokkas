// express
const express = require('express');
// router
const router = express.Router();

// login/signup controller functions
const {signupUser, loginUser} = require('../controllers/userController')

// login route
router.post('/login', loginUser)

// sign up route
router.post('/signup', signupUser)

module.exports = router