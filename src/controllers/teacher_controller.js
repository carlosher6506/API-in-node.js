const teacherSchema = require('../models/teacher');


//  Crear
const create = async (req, res) => {
    try {
        console.log(req.body);
        const teacher = new teacherSchema(req.body);
        const data = await teacher.save();
        res.json(data);
    } catch (e) {
        res.json(e);
    }
}

//  Buscar
const find = async (req, res) => {
    try {
        const data = await teacherSchema.find();
        res.json(data);
    } catch (e) {
        res.json(e);
    }
}

//  Actualizar
const update = async (req, res) => {
    try {
        const { id } = req.params;
        const { firstName, lastName, age } = req.body;
        const data = await teacherSchema.updateOne({ _id: id }, { $set: { firstName, lastName, age } });
        res.json(data);
    } catch (e) {
        res.json(e);
    }
}

//  Eliminar
const deleteTeacher = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await teacherSchema.deleteOne({ _id: id });
        res.json(data);
    } catch (e) {
        res.json(e);
    }
}

module.exports = {
    create,
    find,
    update,
    deleteTeacher
}