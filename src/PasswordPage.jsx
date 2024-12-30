import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PasswordPage = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password === 'oman2025oman') {
      navigate('/secret');
    } else {
      setError('كلمة المرور غير صحيحة. يرجى المحاولة مرة أخرى.');
    }
  };

  // Inline styles for password page with responsive design
  const pageStyles = {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
    direction: 'rtl', // Right-to-left text direction for Arabic
    padding: '0 20px',
  };

  const formStyles = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '400px', // Max width for larger screens
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center', // Centered text inside form
  };

  const inputStyles = {
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
    width: '100%', // Make input field responsive
  };

  const buttonStyles = {
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    width: '100%', // Make button full width for mobile responsiveness
  };

  const errorStyles = {
    color: 'red',
    fontSize: '14px',
    marginTop: '10px',
  };

  return (
    <div style={pageStyles}>
      <h1>أدخل كلمة المرور</h1>
      <form onSubmit={handleSubmit} style={formStyles}>
        <input
          type="password"
          placeholder="أدخل كلمة المرور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={inputStyles}
        />
        <button type="submit" style={buttonStyles}>إرسال</button>
      </form>
      {error && <p style={errorStyles}>{error}</p>}
    </div>
  );
};

export default PasswordPage;
