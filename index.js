const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const Port = process.env.PORT || 5000;

const courseCategory = require('./Data/category.json');

app.get('/', (req, res) => {
  res.send('Hello from server');
});

app.get('/course-categories', (req, res) => {
  res.send(courseCategory);
});

app.listen(Port, () => {
  console.log('Server is running on port', Port);
});
