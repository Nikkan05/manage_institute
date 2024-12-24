const express = require('express');
const router = express.Router();
const Attendance = require('../models/Attendance');

// Add Attendance
router.post('/', async (req, res) => {
  const { date, studentId, status } = req.body;
  const newAttendance = new Attendance({ date, studentId, status });

  try {
    await newAttendance.save();
    res.status(201).send('Attendance recorded successfully!');
  } catch (error) {
    res.status(500).send('Error saving attendance: ' + error.message);
  }
});

// Get Attendance by Date
router.get('/:date', async (req, res) => {
  try {
    const attendanceLogs = await Attendance.find({ date: req.params.date });
    res.status(200).json(attendanceLogs);
  } catch (error) {
    res.status(500).send('Error retrieving attendance: ' + error.message);
  }
});

module.exports = router;
