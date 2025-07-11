const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  photo: String, // Cloudinary URL
  department: String,
  position: String
});

module.exports = mongoose.model('Employee', employeeSchema);
