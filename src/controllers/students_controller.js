
const express = require('express');
const studentSchema = require('../models/student');

//  Crear
const create = async (req, res) => {
    try {
        console.log(req.body);
        const student = new studentSchema(req.body);
        const data = await student.save();
        res.json(data);
    } catch (e) {
        res.json(e);
    }
}

//  Buscar 
const search = async (req, res) => {
    try {
        const data = await studentSchema.find();
        res.json(data);
    } catch (e) {
        res.json(e);
    }
}

// Update
const update = async (req, res) => {
    try {
        const { id } = req.params;
        const { firstName, lastName, age } = req.body;
        const data = await studentSchema.updateOne({ _id: id }, { $set: { firstName, lastName, age } });
        res.json(data);
    } catch (e) {
        res.json(e);
    }
}


//  Eliminar
const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await studentSchema.deleteOne({ _id: id });
        res.json(data);
    } catch (e) {
        res.json(e);
    }
}


// Consulta total de alumnos
const TotalStudents = async (req, res) => {
    try {
        const count = await studentSchema.countDocuments();
        res.json({ totalStudents: count });
    } catch (error) {
        res.status(500).json({ error});
    }
};

//  Busqueda por nombre Query parameter
//  BusquedaForName?Nombre=gohe
const SearchByName = async (req, res) => {
    const Name = req.query.Name;
    try {
        const students = await studentSchema.find({ firstName: Name });
        res.json(students);
    } catch (error) {
        res.status(500).json({ error});
    }
};

//  Busqueda por nombre parametro
//  BusquedaForName2/
const SearchByName2 = async (req, res) => {
    const Name = req.params.Name;
    try {
        const students = await studentSchema.find({ firstName: Name });
        res.json(students);
    } catch (error) {
        res.status(500).json({ error });
    }
};


// Busqueda por edad mayor o igual a 20 y limitar resultados a 4
const SearchByAge = async (req, res) => {
    const Age = req.query.Age;
    console.log('Age received:', Age); // Add this line
    try {
        const students = await studentSchema.find({ age: { $gte: Age } }).limit(4);
        res.json(students);
    } catch (error) {
        res.status(500).json({ error});
    }
};

const TotalStudents2 = async (req, res) => {
    try {
        const count = await studentSchema.countDocuments();
        const students = await studentSchema.find({}, { __v: 0 }).sort({ age: 1 });
        res.json({ totalStudents: count, students });
    } catch (error) {
        res.status(500).json({ error});
    }
};

const getStudentsByCourse = async (req, res) => {
    const courseId = req.query.courseId;

    try {
        if (!courseId) {
            return res.status(400).json({ error: 'You must provide a course ID' });
        }

        // Find students that belong to the course
        const students = await studentSchema.find({ courses: { $in: [courseId] } }, { __v: 0 });
        res.json(students);
    } catch (error) {
        res.status(500).json({ error: 'Error searching students by course' });
    }
};

module.exports = {
    create,
    search,
    deleteStudent,
    update,
    TotalStudents,
    SearchByName,
    SearchByName2,
    SearchByAge,
    TotalStudents2,
    getStudentsByCourse
}