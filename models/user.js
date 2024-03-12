const mongoose = require('mongoose') 
const { Schema }= mongoose

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true
    },
    password:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    role: {
        type: String,
        enum: ['customer', 'admin'],
        default: 'customer',
    }

}, {timestamps: true})

module.exports = mongoose.model('User', userSchema)
