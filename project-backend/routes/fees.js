const express = require('express');
const router = express.Router();
const Fees = require('../models/Fees');

// Check Fee Status
router.get('/:studentId', async (req, res) => {
  try {
    const feeRecord = await Fees.findOne({ studentId: req.params.studentId });
    if (!feeRecord) return res.status(404).send('No fee record found.');
    res.status(200).json(feeRecord);
  } catch (error) {
    res.status(500).send('Error retrieving fee status: ' + error.message);
  }
});

// Update Fee Status
router.put('/:studentId', async (req, res) => {
  try {
    const updatedFee = await Fees.findOneAndUpdate(
      { studentId: req.params.studentId },
      { status: 'clear' },
      { new: true }
    );
    res.status(200).send('Fee status updated successfully!');
  } catch (error) {
    res.status(500).send('Error updating fee status: ' + error.message);
  }
});

module.exports = router;
