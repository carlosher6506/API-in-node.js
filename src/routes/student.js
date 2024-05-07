const express = require('express');
const studentSchema = require('../models/student');

//constructor que enruta 
const routerstudent = express.Router();


//create student
routerstudent.post('/student', (req, res) =>{
    const students = studentSchema(req.body);
    students.save()
    .then((data)=>res.json(data))
    .catch(()=> res.json({message: error}));
});

//get all student
routerstudent.get('/student', (req, res) =>{
    studentSchema.find()
    .then((data)=>res.json(data))
    .catch(()=> res.json({message: error}));
});

//get one student
routerstudent.get('/student/:id', (req, res) =>{
    const {id} = req.params;
    studentSchema.findById(id)
    .then((data)=>res.json(data))
    .catch(()=> res.json({message: error}));
});

//update one student
routerstudent.put('/student/:id', (req, res) =>{
    const {id} = req.params;
    const {firstName, lastName, age, courses} = req.body;
    studentSchema.updateOne({_id: id},{$set:{firstName, lastName, age, courses}})
    .then((data)=>res.json(data))
    .catch(()=> res.json({message: error}));
});

//delete one student
routerstudent.delete('/student/:id', (req, res) =>{
    const {id} = req.params;
    studentSchema.deleteOne({_id: id})
    .then((data)=>res.json(data))
    .catch(()=> res.json({message: error}));
});

module.exports = routerstudent;