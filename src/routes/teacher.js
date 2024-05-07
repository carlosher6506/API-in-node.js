const express = require('express');
const teacherSchema = require('../models/teacher');

//constructor que enruta 
const routerTeacher = express.Router();


//create teacher
routerTeacher.post('/teacher', (req, res) =>{
    const teachers = teacherSchema(req.body);
    teachers.save()
    .then((data)=>res.json(data))
    .catch(()=> res.json({message: error}));
});

//get all teacher
routerTeacher.get('/teacher', (req, res) =>{
    teacherSchema.find()
    .then((data)=>res.json(data))
    .catch(()=> res.json({message: error}));
});

//get one teacher
routerTeacher.get('/teacher/:id', (req, res) =>{
    const {id} = req.params;
    teacherSchema.findById(id)
    .then((data)=>res.json(data))
    .catch(()=> res.json({message: error}));
});

//update one teacher
routerTeacher.put('/teacher/:id', (req, res) =>{
    const {id} = req.params;
    const {firstName, lastName, age} = req.body;
    teacherSchema.updateOne({_id: id},{$set:{firstName, lastName, age}})
    .then((data)=>res.json(data))
    .catch(()=> res.json({message: error}));
});

//delete one teacher
routerTeacher.delete('/teacher/:id', (req, res) =>{
    const {id} = req.params;
    teacherSchema.deleteOne({_id: id})
    .then((data)=>res.json(data))
    .catch(()=> res.json({message: error}));
});

module.exports = routerTeacher;