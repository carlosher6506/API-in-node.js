const courseSchema = require('../models/course');

const create = async (req, res) => {
  try {
    console.log(req.body);
    const course = new courseSchema(req.body);
    const data = await course.save();
    res.json(data);
  } catch (e) {
    res.json(e);
  }
};

// Search
const search = async (req, res) => {
  try {
    const data = await courseSchema.find();
    res.json(data);
  } catch (e) {
    res.json(e);
  }
};

// Update
const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, teacher, students } = req.body;
    const data = await courseSchema.updateOne({ _id: id }, { $set: { name, teacher, students } });
    res.json(data);
  } catch (e) {
    res.json(e);
  }
};

// Delete
const deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await courseSchema.deleteOne({ _id: id });
    res.json(data);
  } catch (e) {
    res.json(e);
  }
};

const searchById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await courseSchema.findById(id).populate('teacher');
    if (data) {
      res.json(data);
    } else {
      res.status(404).json({ message: 'Course not found' });
    }
  } catch (e) {
    console.error('Error searching course by ID:', e);  // Log the error with more detail
    res.status(500).json({ message: 'Internal Server Error', error: e.message });
  }
};



module.exports = {
  create,
  search,
  update,
  deleteCourse,
  searchById
};
