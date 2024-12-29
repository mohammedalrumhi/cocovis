import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const SecretPage = () => {
  // Inline styles for the secret page
  const pageStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
    direction: 'rtl', // Right-to-left text direction for Arabic
    backgroundImage: 'url(/bg.png)', // Path to the image in the public folder
    backgroundSize: 'cover', // Makes the background image cover the entire container
    backgroundPosition: 'center', // Centers the background image
    backgroundRepeat: 'no-repeat', // Ensures the background image does not repeat
    backgroundAttachment: 'fixed', // Makes the background image stay fixed during scroll
  };

  const topRowStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '50%', // The image takes up the top 50% of the page
    overflow: 'hidden', // Prevents image from overflowing the container
    position: 'relative',
  };

  const imageStyles = {
    width: '100%',  // Ensures the image fits the container width
    height: '100%', // Ensures the image fills the container height
    objectFit: 'cover', // Ensures the image covers the container while maintaining its aspect ratio
    objectPosition: 'center', // Keeps the image centered in the container
  };

  const bottomRowStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '50%', // The PDF viewer takes up the bottom 50% of the page
    padding: '20px',
    flexDirection: 'column', // Stacks the viewer and the download link
  };



  return (
    <>
    <div style={pageStyles}>
      {/* Top Row: Image (no-repeat and responsive) */}
      <div >
        <img 
          src="/bg.png" 
          alt="Background"
          style={imageStyles} 
        />
      </div>


    </div>


      {/* Bottom Row: PDF Viewer and Download Link */}
      <div style={bottomRowStyles}>
  

        {/* Download Link */}
        <a 
          href="/ss.pdf" 
          download="sample.pdf" 
          style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#00796b', color: 'white', borderRadius: '5px', textDecoration: 'none' }}
        >
          تحميل الملف PDF
        </a>
      </div>

      
      </>
  );
};

export default SecretPage;
