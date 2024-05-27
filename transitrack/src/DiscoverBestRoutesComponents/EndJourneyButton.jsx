import React from 'react';

const EndJourneyButton = ({ onEndClick }) => (
  <button
    onClick={onEndClick} // Added onClick prop
    style={{
      position: 'absolute',
      top: '-480px',
      left: '60%', // Adjust position to sit next to the Start button
      transform: 'translateX(-50%)',
      backgroundColor: 'green', // Different color to distinguish
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
    End Journey
  </button>
);

export default EndJourneyButton;