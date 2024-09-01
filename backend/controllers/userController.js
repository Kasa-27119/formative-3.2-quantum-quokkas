// imports
const User = require('../models/userModel');
// web token
const jwt = require('jsonwebtoken');

// create jwt token
const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}

// user login
const loginUser = async (req, res) => {
    res.json({mssg: 'login user'})
}

// user sign up
const signupUser = async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await User.signup(email, password)
        // token
        const token = createToken(user._id);
        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

// exporting the above functions
module.exports = {signupUser, loginUser}