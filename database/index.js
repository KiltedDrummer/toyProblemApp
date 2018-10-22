const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb://toyproblems:${process.env.MONGO_PW}@ds135993.mlab.com:35993/toy-problem-db`);
db = mongoose.connection;

db.on('error', (err) => {
  console.log(err);
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

module.exports = db;