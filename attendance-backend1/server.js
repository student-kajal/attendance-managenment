const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/employees', require('./routes/employeeRoutes'));
app.use('/api/attendance', require('./routes/attendanceRoutes'));

// photo upload route
const multer = require('multer');
const { storage } = require('./utils/cloudinary');
const upload = multer({ storage });
app.post('/upload-photo', upload.single('photo'), (req, res) => {
  res.json({ url: req.file.path });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
