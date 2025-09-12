import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function Sidebar() {
  const { user } = useAuth();

  const adminItems = [
    { to: '/admin', label: 'Dashboard' },
    { to: '/admin/employees', label: ' 👥 Employees' },
    { to: '/admin/add', label: ' 📂Add Employee' },
    { to: '/admin/leaves', label: '📜 Leaves' },
    { to: '/admin/departments', label: '🏢 Departments' }
  ];

  const empItems = [
    { to: '/employee', label: '👤 Profile' },
    { to: '/employee/apply', label: ' 📝 Apply Leave' },
    { to: '/employee/history', label: '📜 Leave History' },
  ];

  const items = (user?.role==='admin')?adminItems:empItems;

  return (
    <aside className="sidebar" aria-label="Sidebar">
      <div className="menu-title">Menu</div>
      {items.map(i=>(
        <NavLink key={i.to} to={i.to} className={({isActive})=>isActive?'s-item active':'s-item'}>{i.label}</NavLink>
      ))}
    </aside>
  );
}
