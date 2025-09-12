import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext'; // your existing auth context

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout?.();           // clears token in context
    navigate('/login');   // go to login
  };

  return (
    <header className="navbar">
      <div className="brand">EMS</div>

      <div className="nav-right">
        {user ? (
          <>
            <div className="user">{user.name} <span className="muted">({user.role})</span></div>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <div className="user muted">Not signed in</div>
        )}
      </div>
    </header>
  );
}
