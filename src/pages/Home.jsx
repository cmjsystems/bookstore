import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  function handleSetupClick() {
    navigate('/setup');
  }

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      backgroundColor: '#f0f8ff' 
    }}>
      <h1 style={{ 
        marginBottom: '50px', 
        color: '#007BFF', 
        fontSize: '3em', 
        textShadow: '2px 2px 4px rgba(0,0,0,0.5)' 
      }}>
        Welcome to the Group 7 Bookstore!
      </h1>
      <button 
        onClick={handleSetupClick} 
        style={{ 
          padding: '20px 40px', // Increased padding
          fontSize: '1.2em', // Increased font size
          backgroundColor: '#007BFF', 
          color: 'white', 
          border: 'none', 
          borderRadius: '4px', 
          cursor: 'pointer', 
          transition: 'all 0.3s ease',
          boxShadow: '2px 2px 4px rgba(0,0,0,0.5)'
        }}
        onMouseOver={e => e.currentTarget.style.backgroundColor = '#0056b3'}
        onMouseOut={e => e.currentTarget.style.backgroundColor = '#007BFF'}
      >
        Welcome
    </button>
    </div>
  );
}

export default HomePage;