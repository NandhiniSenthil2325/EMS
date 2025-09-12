import React from "react";
import { useData } from "../../contexts/DataContext";

export default function Dashboard() {
  const { employees, leaves, loading } = useData();
  if (loading) return <div className="p-20">Loading...</div>;

  const pendingLeaves = leaves.filter(l => l.status==='pending').length;
  const approvedLeaves = leaves.filter(l => l.status==='approved').length;
  const rejectedLeaves = leaves.filter(l => l.status==='rejected').length;
  const departments = [...new Set(employees.map(e => e.department))];

  return (
    <div className="dashboard">
      <div className="cards-grid">
        <div className="card small">Employees: {employees.length}</div>
        <div className="card small">Departments: {departments.length}</div>
        <div className="card small">Leaves Pending: {pendingLeaves}</div>
        <div className="card small">Leaves Approved: {approvedLeaves}</div>
        <div className="card small">Leaves Rejected: {rejectedLeaves}</div>
      </div>
    </div>
  );
}
