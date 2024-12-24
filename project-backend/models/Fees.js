const mongoose = require('mongoose');

const feesSchema = new mongoose.Schema({
  studentId: { type: String, required: true },
  status: { type: String, enum: ['pending', 'clear'], required: true },
  amount: { type: Number, required: true },
});

module.exports = mongoose.model('Fees', feesSchema);
