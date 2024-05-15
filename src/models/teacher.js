const mongoose = require('mongoose');
const Teacher = require('./teacher')

const teacherSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
},{ timestamps: true });

module.exports = mongoose.model('Teacher', teacherSchema);