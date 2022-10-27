const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

const courses = require('./data/courses.json');
app.get('/', (req, res) => {
    res.send('courses server is running');
});

app.get('/courses', (req, res) => {
    res.send(courses);
});

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const coursesData = courses.find((cr) => cr.id == id);
    res.send(coursesData);
});

app.listen(port, () => {
    console.log(`courses running on port, ${port}`);
});

module.exports = app;
