
const express = require('express');
const router = express.Router(); //constructor que enruta 
const teacherController = require("../controllers/teacher_controller")

//  Importación de CRUD
router.post('/teachers', teacherController.create);
router.get('/teachers', teacherController.find);
router.put('/teachers/:id', teacherController.update);
router.delete('/teachers/:id', teacherController.deleteTeacher);

module.exports = router;


