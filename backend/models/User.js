const mongoose = require("mongoose");

const userData = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    
    createdTime: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("User", userData);
