import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Common/Navbar';
import Sidebar from '../components/Common/Sidebar';
import Dashboard from '../components/Admin/Dashboard';
import EmployeeList from '../components/Admin/EmployeeList';
import EmployeeForm from '../components/Admin/EmployeeForm';
import LeaveRequests from '../components/Admin/LeaveRequests';
import DepartmentForm from '../components/Admin/DepartmentForm';
export default function AdminPage() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <main className="content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="employees" element={<EmployeeList />} />
          <Route path="add" element={<EmployeeForm />} />
          <Route path="leaves" element={<LeaveRequests />} />
          <Route path="departments" element={<DepartmentForm />} />

        </Routes>
      </main>
    </div>
  );
}
