import React, { useEffect, useState } from 'react';
import { useNavigate,Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { handleError, handleSuccess } from '../utils';
import UserSidebar from '../components/UserSidebar'; // Reuse sidebar
import 'react-toastify/dist/ReactToastify.css';

function UserDashboard() {
    const [loggedInUser, setLoggedInUser] = useState('');
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem('loggedInUser');
        setLoggedInUser(user);

        // Dummy products for testing
        setProducts([
            { name: 'Laptop', price: 50000 },
            { name: 'Phone', price: 20000 },
            { name: 'Headphones', price: 3000 }
        ]);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        handleSuccess('User Logged out');
        setTimeout(() => {
            navigate('/login');
        }, 1000);
    };

    return (
        <Container fluid className="p-0">
            <Row>
                {/* Sidebar */}
                <Col md={3} className="bg-dark text-white d-flex flex-column align-items-start" style={{ minHeight: '100vh', padding: '20px' }}>
                    <UserSidebar />
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
}

export default UserDashboard;
