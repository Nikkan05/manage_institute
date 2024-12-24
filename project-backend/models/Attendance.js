const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  date: { type: String, required: true },
  studentId: { type: String, required: true },
  status: { type: String, enum: ['present', 'absent'], required: true },
});

module.exports = mongoose.model('Attendance', attendanceSchema);
