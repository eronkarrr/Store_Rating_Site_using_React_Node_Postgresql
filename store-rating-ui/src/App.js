import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import DashboardLayout from './components/DashboardLayout';
import Home from './pages/Home';
import Stores from './pages/Stores';
import Ratings from './pages/Ratings';
import Users from './pages/Users';
import { Navigate } from 'react-router-dom';


function App() {
  return (
    <Router>

      <Navbar />  {/* हे सर्व पानांवर दिसेल */}


      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Dashboard */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Home />} />
          <Route path="stores" element={<Stores />} />
          <Route path="ratings" element={<Ratings />} />
          <Route path="users" element={<Users />} />
          

        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
