// mongoose
const mongoose = require('mongoose');
// bCrypt
const bcrypt = require('bcrypt');
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

module.exports = mongoose.model('User', userSchema)