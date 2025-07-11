const Attendance = require('../models/Attendance');

exports.checkIn = async (req, res) => {
  const { employeeId } = req.body;
  const today = new Date().toDateString();

  const alreadyMarked = await Attendance.findOne({
    employeeId,
    date: { $gte: new Date(today) }
  });

  if (alreadyMarked) {
    return res.status(400).json({ message: "Already checked in today" });
  }

  const newRecord = new Attendance({ employeeId, checkIn: new Date(), status: 'Present' });
  await newRecord.save();
  res.json(newRecord);
};

exports.checkOut = async (req, res) => {
  const { employeeId } = req.body;

  const record = await Attendance.findOne({ employeeId }).sort({ date: -1 });
  if (!record || record.checkOut) {
    return res.status(400).json({ message: "Check-in not found or already checked out" });
  }

  record.checkOut = new Date();
  await record.save();
  res.json(record);
};

exports.getAllAttendance = async (req, res) => {
  const records = await Attendance.find().populate('employeeId', 'name email');
  res.json(records);
};
