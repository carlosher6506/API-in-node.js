const express = require('express');
const teacherSchema = require('../models/teacher');

//constructor que enruta 
const router = express.Router();


//create teacher
router.post('/teacher', (req, res) =>{
    const teacher = teacherSchema(req.body);
    teacher.save()
    .then((data)=>res.json(data))
    .catch(()=> res.json({message: error}));
});

//get all teacher
router.get('/teacher', (req, res) =>{
    teacherSchema.find()
    .then((data)=>res.json(data))
    .catch(()=> res.json({message: error}));
});

//get one teacher
router.get('/teacher/:id', (req, res) =>{
    const {id} = req.params;
    teacherSchema.findById(id)
    .then((data)=>res.json(data))
    .catch(()=> res.json({message: error}));
});

//update one teacher
router.put('/teacher/:id', (req, res) =>{
    const {id} = req.params;
    const {firstName, lastName, age} = req.body;
    teacherSchema.updateOne({_id: id},{$set:{firstName, lastName, age}})
    .then((data)=>res.json(data))
    .catch(()=> res.json({message: error}));
});

//delete one teacher
router.delete('/teacher/:id', (req, res) =>{
    const {id} = req.params;
    teacherSchema.deleteOne({_id: id})
    .then((data)=>res.json(data))
    .catch(()=> res.json({message: error}));
});

module.exports = router;