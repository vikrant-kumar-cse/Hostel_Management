import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UserDashboard from './pages/UserDashboard';
import AdminLogin from './pages/AdminLogin';
import AdminSidebar from './components/AdminSidebar';
import UserTable from './components/UserTable';
import AdminDashboard from './pages/AdminDashboard'; // ✅ path aapke project ke according 
import Navigation from './pages/Navigation';
import Navbar from './components/Navbar';
import AdminSettings from './components/AdminSettings';
import StoreManager from './components/StoreManager';
import AdminAnalytics from './components/AdminAnalytics';



import { useState } from 'react';
import RefrshHandler from './RefrshHandler';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />
  }

  const PrivateRoute02 = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/admin-login" />
  }

  
  return (
    <div className="App">
      
      <RefrshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path='/' element={<Navigate to="/Navigation" />} />
        <Route path='/navigation' element={<Navigation />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />





        <Route path='/User-Dashboard/*' element={<PrivateRoute element={<UserDashboard />} />}>
                  <Route index element={<h3>📊 Dashboard Overview</h3>} />
                      <Route path="User-Detaied" element={<UserTable />} />
                      <Route path="hostel-allotment" element={<AdminAnalytics />} />
                      <Route path="mess-reduction" element={<h3>✏️ Create Sub Admin Page</h3>} />
                      <Route path="mess-tracking" element={<AdminSettings />} />
                      <Route path="mess-calendar" element={<StoreManager />} />
                      <Route path="grievance" element={<StoreManager />} />
                      <Route path="rules" element={<StoreManager />} />
                  </Route>
             
        
        
        <Route path="/admin-login" element={<AdminLogin />} />



        <Route path='/admin-dashboard/*' element={<PrivateRoute02 element={<AdminDashboard />} />}>
       <Route index element={<h3>📊 Dashboard Overview</h3>} />
              <Route path="User-Detaied" element={<UserTable />} />
              <Route path="analytics" element={<AdminAnalytics />} />
              <Route path="admin-create" element={<h3>✏️ Create Sub Admin Page</h3>} />
              <Route path="admin-settings" element={<AdminSettings />} />
              <Route path="store-manager" element={<StoreManager />} />
       </Route>
       
      </Routes>
    </div>
  );
}

export default App;