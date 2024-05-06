const express = require('express');
const courseSchema = require('../models/course');

//constructor que enruta 
const router = express.Router();


//create course
router.post('/course', (req, res) =>{
    const courses = courseSchema(req.body);
    courses.save()
    .then((data)=>res.json(data))
    .catch(()=> res.json({message: error}));
});

//get all courses
router.get('/course', (req, res) =>{
    courseSchema.find()
    .then((data)=>res.json(data))
    .catch(()=> res.json({message: error}));
});

//get one courses
router.get('/course/:id', (req, res) =>{
    const {id} = req.params;
    courseSchema.findById(id)
    .then((data)=>res.json(data))
    .catch(()=> res.json({message: error}));
});

//update one courses
router.put('/course/:id', (req, res) =>{
    const {id} = req.params;
    const {name, teacher} = req.body;
    courseSchema.updateOne({_id: id},{$set:{name, teacher}})
    .then((data)=>res.json(data))
    .catch(()=> res.json({message: error}));
});

//delete one courses
router.delete('/course/:id', (req, res) =>{
    const {id} = req.params;
    courseSchema.deleteOne({_id: id})
    .then((data)=>res.json(data))
    .catch(()=> res.json({message: error}));
});

module.exports = router;