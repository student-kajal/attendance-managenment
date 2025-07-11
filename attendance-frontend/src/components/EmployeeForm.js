import React, { useState } from 'react';
import API from '../api';
import UploadImage from './UploadImage';

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', position: '', department: '', photo: ''
  });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await API.post('/api/employees', formData);
//     alert('Employee added');
//   };
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
   // await API.post('/api/employees', formData);
      await API.post('/api/employees/create', formData); 
    alert('Employee added');
  } catch (error) {
    console.error('Submission error:', error);
    alert('Failed to add employee');
  }
};

  return (
    <form onSubmit={handleSubmit}>
      <UploadImage setImageUrl={(url) => setFormData({ ...formData, photo: url })} />
      <input placeholder="Name" onChange={e => setFormData({ ...formData, name: e.target.value })} />
      <input placeholder="Email" onChange={e => setFormData({ ...formData, email: e.target.value })} />
      <input placeholder="Position" onChange={e => setFormData({ ...formData, position: e.target.value })} />
      <input placeholder="Department" onChange={e => setFormData({ ...formData, department: e.target.value })} />
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default EmployeeForm;
