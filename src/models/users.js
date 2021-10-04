const mongoose = require('mongoose');
let crypto = require('crypto');
let jwt = require('jsonwebtoken');
let config = require('../config/auth');
let Schema = mongoose.Schema;


// Models --------------------------------------------------------------------------------------------------------------

const user = new Schema({
    username: {type: String, maxlength: 32, required: true, unique:true},
    hashedPassword: {type: String, required: true},
    salt: {type: String, required: true},
    firstName: {type: String, maxlength: 32, required: true},
    lastName: {type: String, maxlength: 32, required: true},
    email: {type: String, maxlength: 128, required: true, unique:true},

},
    {
        timestamps: true
    });


// Functions -----------------------------------------------------------------------------------------------------------

// Create salt and hash password
user.methods.hashPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hashedPassword = crypto
        .pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
        .toString('hex');
};


// Hash received password and compare it
user.methods.checkPassword = function(password) {
    let hashedPassword = crypto
        .pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
        .toString('hex');
    return this.hashedPassword === hashedPassword;
};


// Generate and sign jwt for 24 hours
user.methods.generateJWT = function() {

    return jwt.sign({ id: this._id}, config.secret, {
        expiresIn: 86400 // 24 hours
    });
};

mongoose.model('User', user);