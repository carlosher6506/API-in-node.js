const express = require('express');
const studentSchema = require('../models/student');

//constructor que enruta 
const router = express.Router();


//create student
router.post('/student', (req, res) =>{
    const student = studentSchema(req.body);
    student.save()
    .then((data)=>res.json(data))
    .catch(()=> res.json({message: error}));
});

//get all student
router.get('/student', (req, res) =>{
    studentSchema.find()
    .then((data)=>res.json(data))
    .catch(()=> res.json({message: error}));
});

//get one student
router.get('/student/:id', (req, res) =>{
    const {id} = req.params;
    studentSchema.findById(id)
    .then((data)=>res.json(data))
    .catch(()=> res.json({message: error}));
});

//update one student
router.put('/student/:id', (req, res) =>{
    const {id} = req.params;
    const {firstName, lastName, age, courses} = req.body;
    studentSchema.updateOne({_id: id},{$set:{firstName, lastName, age, courses}})
    .then((data)=>res.json(data))
    .catch(()=> res.json({message: error}));
});

//delete one student
router.delete('/student/:id', (req, res) =>{
    const {id} = req.params;
    studentSchema.deleteOne({_id: id})
    .then((data)=>res.json(data))
    .catch(()=> res.json({message: error}));
});

module.exports = router;