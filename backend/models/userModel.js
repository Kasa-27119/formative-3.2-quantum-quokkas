// mongoose
const mongoose = require('mongoose');
// bCrypt
const bcrypt = require('bcrypt');
// validator
const validator = require('validator');
// schema setup
const Schema = mongoose.Schema;

// user schema
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

// static signup method
userSchema.statics.signup = async function (email, password) {
    // check for password and email value
    if (!email || !password) {
        throw Error ('All fields must be filled in')
    }
    // validate email
    if (!validator.isEmail(email)) {
        throw Error ('Email is not valid')
    }
    // check password is strong
    if (!validator.isStrongPassword(password)) {
        throw Error ('Password is not strong enough')
    }

    const exists = await this.findOne({email})

    if (exists) {
        throw Error('Email already in use')
    }

    // generating salt with 10 characters
    const salt = await bcrypt.genSalt(10);
    // hash the password and salt combined
    const hash = await bcrypt.hash(password, salt);

    // set password to the hash value when user is created
    const user = await this.create({email, password: hash});

    return user
}

// static login
userSchema.statics.login = async function (email, password) {
    if (!email || !password) {
        throw Error ('All fields must be filled in');
    }
    // find user email in db
    const user = await this.findOne({email})

    if (!user) {
        throw Error ('Incorrect email')
    }
    // compare passwords
    const match = await bcrypt.compare(password, user.password);

    // error if dont match
    if(!match) {
        throw Error ('Incorrect password');
    }
    return user
}

module.exports = mongoose.model('User', userSchema)