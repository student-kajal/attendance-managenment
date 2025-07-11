const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  date: { type: Date, default: Date.now },
  checkIn: Date,
  checkOut: Date,
  status: { type: String, enum: ['Present', 'Absent', 'Leave'], default: 'Present' }
});

module.exports = mongoose.model('Attendance', attendanceSchema);
