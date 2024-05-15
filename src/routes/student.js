
const express = require('express');
const router = express.Router();
const studentController = require("../controllers/students_controller")

//  CRUD
router.post('/students', studentController.create);

router.get('/students', studentController.search);

router.put('/estudiantes/:id', studentController.update);

router.delete('/students/:id', studentController.deleteStudent);

//  Consulta 1 
router.get('/students/TotalStudents', studentController.TotalStudents);

//  Consulta 2
router.get('/students/SearchByName', studentController.SearchByName);

//  Consulta 3
router.get('/students/SearchByName2/:Name', studentController.SearchByName2);

// Consulta 4
router.get('/students/SearchByAge', studentController.SearchByAge);

router.get('/students/TotalStudents2', studentController.TotalStudents2);

router.get('/students/course', studentController.getStudentsByCourse);




module.exports = router;


