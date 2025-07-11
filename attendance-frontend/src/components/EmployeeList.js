import React, { useEffect, useState } from 'react';
import API from '../api';
import './EmployeeList.css'; // custom CSS file

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const load = async () => {
      const res = await API.get('/api/employees');
      setEmployees(res.data);
    };
    load();
  }, []);

  return (
    <div className="employee-list">
      <h3>👥 Employees</h3>
      <div className="card-container">
        {employees.map(emp => (
          <div className="employee-card" key={emp._id}>
            <img src={emp.photo} alt={emp.name} />
            <h4>{emp.name}</h4>
            <p>{emp.email}</p>
            <p>{emp.position} - {emp.department}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;
