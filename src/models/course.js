const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    teacher:[{
        type: mongoose.Schema.Types.ObjectId, ref: 'teachers'
    }]
});

module.exports = mongoose.model('Course',courseSchema);