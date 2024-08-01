const mongoose = require('mongoose')

const User = mongoose.UserSchema({
    name:String,
    email:String,
    password:String
})