const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const Port = process.env.PORT || 5000;

const courseCategory = require('./Data/category.json');
const courses = require('./Data/courses.json');

app.get('/', (req, res) => {
  res.send('Hello from server');
});

app.get('/course-categories', (req, res) => {
  res.send(courseCategory);
});

app.get('/category/:id', (req, res) => {
  const id = req.params.id;
  if (id == '00') {
    res.send(courses);
  } else {
    const categoryCourses = courses.filter(
      (course) => course.category_id == id
    );
    res.send(categoryCourses);
  }
});

app.get('/courses', (req, res) => {
  res.send(courses);
});

app.get('/course/:id', (req, res) => {
  const id = req.params.id;
  const selectedCourse = courses.find((course) => course._id == id);
  res.send(selectedCourse);
  console.log(req.params.id);
});

app.get('/checkout/:id', (req, res) => {
  const id = req.params.id;
  const selectedCourse = courses.find((course) => course._id == id);
  res.send(selectedCourse);
  console.log(req.params.id);
});

app.listen(Port, () => {
  console.log('Server is running on port', Port);
});
