// imports
const User = require('../models/userModel');

// user login
const loginUser = async (req, res) => {
    res.json({mssg: 'login user'})
}

// user sign up
const signupUser = async (req, res) => {
    const {email, password} = req.body

    try {
        const user = await User.signup(email, password)
        res.status(200).json({email, user})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// exporting the above functions
module.exports = {signupUser, loginUser}