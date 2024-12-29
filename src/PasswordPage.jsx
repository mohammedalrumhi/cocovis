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

  // Inline styles for password page
  const pageStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    fontFamily: 'Arial, sans-serif',
    direction: 'rtl',  // Right-to-left text direction for Arabic
  };

  const formStyles = {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const inputStyles = {
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
  };

  const buttonStyles = {
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
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
