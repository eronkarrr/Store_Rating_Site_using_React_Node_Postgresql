import React from 'react';

const Navbar = () => {
  return (
    <nav style={navStyle}>
      <div style={logoContainerStyle}>
        {/* Logo */}
        <img 
          src="/starlogo.png" 
          alt="logo" 
          style={logoStyle} 
        />
        {/* App Name */}
        <h1 style={titleStyle}>Rating App</h1>
      </div>
    </nav>
  );
};

const navStyle = {
  backgroundColor: '#333',
  padding: '10px 20px',
  display: 'flex',
  alignItems: 'center',
  color: 'white',
};

const logoContainerStyle = {
  display: 'flex',
  alignItems: 'center',
};

const logoStyle = {
  height: '30px',
  width: '30px',
  marginRight: '10px',
};

const titleStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
};

export default Navbar;
