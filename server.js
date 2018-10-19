const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = 1337;

/*
  db functions: 
    - saveProblem
    - getRecentlyUploaded
    - getRecentlyPosted
*/

const db = require('./database/controllers/problem.js')

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(morgan({
  format: 'dev',
  immediate: true
}));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.static(path.join(__dirname, '/public')));

app.listen(port, () => {
  console.log(`Listening on Port ${port}`)
});
