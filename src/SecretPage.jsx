import React from 'react';

const SecretPage = () => {
  // Inline styles for the secret page
  const pageStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#e0f7fa',
    fontFamily: 'Arial, sans-serif',
  };

  const headingStyles = {
    fontSize: '2rem',
    color: '#00796b',
    marginBottom: '20px',
  };

  const paragraphStyles = {
    fontSize: '1.2rem',
    color: '#00796b',
    textAlign: 'center',
    maxWidth: '600px',
  };

  return (
    <div style={pageStyles}>
      <h1 style={headingStyles}>Welcome to the Secret Page!</h1>
      <p style={paragraphStyles}>
        This is a protected page, only accessible after entering the correct password. Enjoy your secret content!
      </p>
    </div>
  );
};

export default SecretPage;
