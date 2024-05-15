const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
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
    },
    courses: [{ type: mongoose.Schema.ObjectId, ref: 'course' }]
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);
