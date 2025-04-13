import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const linkStyle = {
  textDecoration: 'none',
  padding: '10px 15px',
  borderRadius: '8px',
  marginBottom: '8px',
  display: 'block',
  fontWeight: '500',
  color: 'white',
};

const activeStyle = {
  backgroundColor: '#2d3748',
  color: '#00d1b2',
};

const AdminSidebar = () => {
  return (
    <div style={{ width: '100%' }}>
      <h4 className="text-white mb-4">🛠️ Admin Panel</h4>

      <Nav className="flex-column">
        <NavLink
          to="/admin-dashboard"
          style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
        >
          📊 Administrator Dashboard
        </NavLink>

        <NavLink
          to="/admin-dashboard/admin-profile"
          style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
        >
          👤 Admin Profile (Editable)
        </NavLink>

        <NavLink
          to="/admin-dashboard/hostel-allotment"
          style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
        >
          🏠 Hostel Allotment (Approval/Rejection)
        </NavLink>

        <NavLink
          to="/admin-dashboard/student-crud"
          style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
        >
          📚 Student Detail Access (CRUD)
        </NavLink>

        <NavLink
          to="/admin-dashboard/mess-calendar"
          style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
        >
          🗓️ Student Mess Calendar (Editable)
        </NavLink>

        <NavLink
          to="/admin-dashboard/mess-reduction"
          style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
        >
          🍽️ Mess Reduction (Approval/Rejection)
        </NavLink>

        <NavLink
          to="/admin-dashboard/mess-tracking"
          style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
        >
          📊 Mess Reduction Tracking
        </NavLink>

        <NavLink
          to="/admin-dashboard/notifications"
          style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
        >
          🔔 Notification / Announcement
        </NavLink>

        <NavLink
          to="/admin-dashboard/grievance-support"
          style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
        >
          💬 Student Grievance Support
        </NavLink>

        <NavLink
          to="/admin-dashboard/rules"
          style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
        >
          📜 Rules & Regulations
        </NavLink>

        <NavLink
          to="/logout"
          style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
        >
          🔓 Logout
        </NavLink>
      </Nav>
    </div>
  );
};

export default AdminSidebar;
