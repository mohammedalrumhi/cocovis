import React from 'react';

const SecretPage = () => {
  // Inline styles for the secret page with background image
  const pageStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundImage: 'url(/bg.png)', // Path to the image in the public folder
    backgroundSize: 'cover', // Makes the background image cover the entire container
    backgroundPosition: 'center', // Centers the background image
    fontFamily: 'Arial, sans-serif',
    color: '#fff',
    textAlign: 'center',
    padding: '20px', // Padding for spacing content from the edges
    direction: 'rtl', // Right-to-left text direction for Arabic
  };

  const headingStyles = {
    fontSize: '2rem',
    marginBottom: '20px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Adding shadow to text for better visibility
  };

  const paragraphStyles = {
    fontSize: '1.2rem',
    maxWidth: '600px',
    marginBottom: '30px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  };

  return (
    <div style={pageStyles}>
      <h1 style={headingStyles}>مرحبًا بك في الصفحة السرية!</h1>
      <p style={paragraphStyles}>
        هذه صفحة محمية، يمكن الوصول إليها فقط بعد إدخال كلمة المرور الصحيحة. استمتع بمحتواك السري!
      </p>
      <img 
        src="/bg.png" 
        alt="Background" 
        style={{ width: '100%', height: 'auto', borderRadius: '10px' }} 
      />
    </div>
  );
};

export default SecretPage;
