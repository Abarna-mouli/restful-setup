require('dotenv').config({ path: './project.env' });
const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;
database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})
const routes=require('./Routes/routes');
app.use('/api', routes);




