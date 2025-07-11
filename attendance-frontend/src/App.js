import React from 'react';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import AttendanceForm from './components/AttendanceForm';
import AttendanceTable from './components/AttendanceTable';

function App() {
  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>🕒 Employee Attendance System</h1>
      <EmployeeForm />
      <EmployeeList />
      <AttendanceForm />
      <AttendanceTable />
    </div>
  );
}

export default App;
