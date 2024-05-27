import React from 'react';

const StartJourneyButton = ({ onStartClick }) => (
  <button
    onClick={onStartClick} // Added onClick prop
    style={{
      position: 'absolute',
      top: '-480px',
      left: '50%', // Adjusted for consistency
      transform: 'translateX(-50%)',
      backgroundColor: 'red',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      padding: '10px 20px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
      zIndex: 1000,
    }}
  >
    Start Journey
  </button>
);

export default StartJourneyButton;
