const express = require('express');
const router = express.Router();
const Curriculum = require('../models/Curriculum');

// Add Curriculum
router.post('/', async (req, res) => {
  const { courseName, fileURL } = req.body;
  const newCurriculum = new Curriculum({ courseName, fileURL });

  try {
    await newCurriculum.save();
    res.status(201).send('Curriculum uploaded successfully!');
  } catch (error) {
    res.status(500).send('Error saving curriculum: ' + error.message);
  }
});

// Get All Curriculums
router.get('/', async (req, res) => {
  try {
    const curriculums = await Curriculum.find();
    res.status(200).json(curriculums);
  } catch (error) {
    res.status(500).send('Error retrieving curriculums: ' + error.message);
  }
});

module.exports = router;
