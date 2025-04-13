import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import AdminSidebar from '../components/AdminSidebar';
import { Outlet, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleSuccess } from '../utils';
import 'react-toastify/dist/ReactToastify.css';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    handleSuccess('Logged out');
    setTimeout(() => {
      navigate('/admin-login');
    }, 1000);
  };

  return (
    <Container fluid className="p-0">
      <Row>
        {/* Sidebar */}
        <Col md={3} className="bg-dark text-white d-flex flex-column align-items-start" style={{ minHeight: '100vh', padding: '20px' }}>
          <AdminSidebar />
        </Col>

        {/* Main Content */}
        <Col md={9} className="bg-light" style={{ minHeight: '100vh', padding: '30px' }}>
          <div className="bg-white shadow rounded p-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h2 className="text-primary mb-0">🎯 Admin Dashboard</h2>
              <Button variant="danger" onClick={handleLogout}>Logout</Button>
            </div>
            <hr />
            <Outlet />
          </div>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default AdminDashboard;
