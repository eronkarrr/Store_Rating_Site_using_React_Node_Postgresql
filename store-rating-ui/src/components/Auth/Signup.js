// src/pages/Signup.jsx
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Signup() {
  const [form, setForm] = useState({ name: '', email: '', address: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    try {
      await axios.post('http://localhost:3000/auth/signup', form);
      alert('Signup successful! You can now login.');
    } catch (err) {
      alert('Signup failed');
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <input
        name="name"
        placeholder="Full Name"
        className="input"
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Email"
        type="email"
        className="input"
        onChange={handleChange}
      />
      <input
        name="address"
        placeholder="Address"
        className="input"
        onChange={handleChange}
      />
      <input
        name="password"
        placeholder="Password"
        type="password"
        className="input"
        onChange={handleChange}
      />
      <button onClick={handleSignup} className="button">
        Signup
      </button>
      <p className="text-small">
        Already have an account? <Link to="/" className="link">Login</Link>
      </p>
    </div>
  );
}

export default Signup;
