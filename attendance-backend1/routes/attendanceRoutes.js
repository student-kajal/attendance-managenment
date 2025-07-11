const express = require('express');
const router = express.Router();
const { checkIn, checkOut, getAllAttendance } = require('../controllers/attendanceController');

router.post('/checkin', checkIn);
router.post('/checkout', checkOut);
router.get('/', getAllAttendance);

module.exports = router;
