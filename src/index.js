const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;
const courseRoutes = require('./routes/course');
const studentRoutes = require('./routes/student');
const teacherRoutes = require('./routes/teacher');
const db = require('./controllers/database');

//midelware
app.use(express.json());
app.use('/api', courseRoutes);
app.use('/api', studentRoutes);
app.use('/api', teacherRoutes);

//routes
app.get('/', (req, res) =>{
    res.send('Welcome to my API');
});

db();

app.listen(port,()=> console.log('Server listening on port', port));