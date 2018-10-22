const mongoose = require('mongoose');

const problemSchema = mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  link: String,
  addedBy: Date,
  addedDate: Date,
  lastUsed: String,
  company: String,
  keywords: Array,
});

const Problem = mongoose.model('Problem', problemSchema);

module.exports = Problem;