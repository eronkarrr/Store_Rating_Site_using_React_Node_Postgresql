import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import DashboardLayout from './components/Layout/DashboardLayout';
import Home from './pages/Home';
import Stores from './pages/stores';
import Ratings from './pages/ratings';
import Users from './pages/users';
import RequireAuth from './components/Auth/RequireAuth';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route element={<RequireAuth />}>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Home />} />
            <Route path="stores" element={<Stores />} />
            <Route path="ratings" element={<Ratings />} />
            <Route path="users" element={<Users />} />
          </Route>
        </Route>

        {/* Catch all */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
