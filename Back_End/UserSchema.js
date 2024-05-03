const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    confirmEmail: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    selectedTopics: [{
        type: String 
    }],
    data:[{
        fullname:[{
            type:String
        }],
        location:[{
            type:String
        }],
        age:[{
            type:Number
        }],
        professional:[{
            type:String
        }],
        workingAt:[{
            type:String
        }],
        profileImage:[{
            type:String
        }]
    }]
});

module.exports = mongoose.model('User', userSchema);
