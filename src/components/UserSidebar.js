import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { handleSuccess } from '../utils';
import 'react-toastify/dist/ReactToastify.css';

const linkStyle = {
  textDecoration: 'none',
  padding: '10px 15px',
  borderRadius: '8px',
  marginBottom: '8px',
  display: 'block',
  fontWeight: '500',
};

const activeStyle = {
  backgroundColor: '#2d3748',
  color: '#00d1b2',
};

const UserSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    handleSuccess('User Logged out');
    setTimeout(() => {
      navigate('/login');
    }, 1000);
  };

  return (
    <div style={{ width: '100%' }}>
      <h4 className="text-white mb-4">🎓 Student Dashboard</h4>

      <Nav className="flex-column">
        <NavLink to="/User-Dashboard" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>
          🏠 Student Profile (Editable)
        </NavLink>
        <NavLink to="/User-Dashboard/hostel-allotment" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>
          🏢 Hostel Allotment Application
        </NavLink>
        <NavLink to="/User-Dashboard/mess-reduction" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>
          🍽️ Mess Reduction Application
        </NavLink>
        <NavLink to="/User-Dashboard/mess-tracking" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>
          📊 Mess Reduction Tracking
        </NavLink>
        <NavLink to="/User-Dashboard/mess-calendar" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>
          🗓️ Mess Calendar (Non Editable)
        </NavLink>
        <NavLink to="/User-Dashboard/grievance" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>
          📩 Student Grievance Support
        </NavLink>
        <NavLink to="/User-Dashboard/rules" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>
          📘 Rules & Regulations
        </NavLink>
        <span onClick={handleLogout} style={{ ...linkStyle, cursor: 'pointer', color: '#ff4d4f', backgroundColor: '#1c1c1c' }}>
          🚪 Logout
        </span>
      </Nav>
    </div>
  );
};

export default UserSidebar;
