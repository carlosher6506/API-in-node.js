const { Console } = require('console');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;
const courseRoutes = require('./routes/course');

//midelware
app.use(express.json());
app.use('/api', courseRoutes);


//routes
app.get('/', (req, res) =>{
    res.send('Welcome to my API');
});

mongoose.connect(
process.env.MONGODB_URI
).then(()=> console.log('Connected to MongoDB'))
.catch((error=> console.error(error)));

app.listen(port,()=> console.log('Server listening on port', port));