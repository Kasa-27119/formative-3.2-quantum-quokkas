// imports
const User = require('../models/userModel');
// user login
const loginUser = async (req, res) => {
    res.json({mssg: 'login user'})
}

// user sign up
const signupUser = async (req, res) => {
    res.json({mssg: 'signup user'})
}

// exporting the above functions
module.exports = {signupUser, loginUser}