
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Common/Navbar';
import Sidebar from '../components/Common/Sidebar';
import Profile from '../components/Employee/Profile';
import ApplyLeave from '../components/Employee/ApplyLeave';
import LeaveHistory from '../components/Employee/LeaveHistory';
export default function EmployeePage() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <main className="content">
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="apply" element={<ApplyLeave />} />
          <Route path="history" element={<LeaveHistory />} />
          

        </Routes>
      </main>
    </div>
  );
}
