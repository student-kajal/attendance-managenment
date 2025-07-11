const express = require('express');
const router = express.Router();
const { createEmployee, getAllEmployees } = require('../controllers/employeeController');

router.post('/create', createEmployee);
router.get('/', getAllEmployees);

module.exports = router;
