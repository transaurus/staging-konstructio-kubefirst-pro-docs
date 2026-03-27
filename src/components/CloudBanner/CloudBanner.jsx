import React from 'react';

const CloudBanner = ({ cloud }) => {
  // Simple component to satisfy imports from old docs
  // You can customize this banner as needed
  return (
    <div className="cloud-banner" style={{
      padding: '16px',
      marginBottom: '20px',
      backgroundColor: '#f0f0f0',
      borderRadius: '8px',
      textAlign: 'center'
    }}>
      <p>This documentation is for {cloud} cloud provider.</p>
    </div>
  );
};

export default CloudBanner;