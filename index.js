const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
app.use(cors());
const courses = require('./data/courses.json');
const courseDetails = require('./data/courseDetails.json')

app.get('/', (req, res) => {
    res.send('Course API Running');
})
app.get('/courses', (req, res) => {
    res.send(courses);
})
app.get('/courseDetails', (req, res) => {
    res.send(courseDetails)
})
app.get('/courseDetails/:id', (req, res) => {
    const id = req.params.id;
    const detailed_courses = courseDetails.filter(n => n.course_id === id)
    res.send(detailed_courses);
})

app.listen(port, () => {
    console.log('Courses Server Running on port', port)
})