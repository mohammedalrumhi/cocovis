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
  };

  const topRowStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '50%', // The image takes up the top 50% of the page
    overflow: 'hidden', // Prevents image from overflowing the container
  };

  const bottomRowStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '50%', // The PDF viewer takes up the bottom 50% of the page
    padding: '20px',
  };

  const pdfViewerStyles = {
    width: '100%',
    height: '100%',
    maxWidth: '1000px', // Max width to prevent it from becoming too large
    borderRadius: '10px',
  };

  const imageStyles = {
    width: '100%', // Make the image responsive
    height: 'auto',
  };

  return (
    <div style={pageStyles}>
      {/* Top Row: Image (no-repeat) */}
      <div style={topRowStyles}>
        <img 
          src="/bg.png" 
          alt="Background"
          style={imageStyles} 
        />
      </div>

      {/* Bottom Row: PDF Viewer */}
      <div style={bottomRowStyles}>
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.10.377/build/pdf.worker.min.js`}>
          <Viewer fileUrl="/ss.pdf" style={pdfViewerStyles} />
        </Worker>
      </div>
    </div>
  );
};

export default SecretPage;
