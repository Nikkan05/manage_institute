const mongoose = require('mongoose');

const curriculumSchema = new mongoose.Schema({
  courseName: { type: String, required: true },
  fileURL: { type: String, required: true },
});

module.exports = mongoose.model('Curriculum', curriculumSchema);
