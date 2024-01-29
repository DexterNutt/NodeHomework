//! TO DO APP
const express = require('express');
const app = express();

// CODE
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

let tasks = [];

app.get('/', (req, res) => {
  res.render('index', { tasks });
});

app.post('/add', (req, res) => {
  const task = req.body.task;
  tasks.push(task);
  res.redirect('/'); //! VITAL
});

app.listen(10000, (err) => {
  if (err) console.log(err);
  console.log(`Server initiated on port 10000`);
});
