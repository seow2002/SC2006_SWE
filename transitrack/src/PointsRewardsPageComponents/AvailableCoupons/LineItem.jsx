import React from 'react';

const styles = {
  lineItem: {
    padding: '10px', // Uniform padding on all sides
    margin: '5px 0', // Margin for spacing between items
    backgroundColor: '#ffffff', // White background
    borderRadius: '10px', // Rounded corners on all sides
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // Subtle shadow
    display: 'flex',
    justifyContent: 'center', // Center content horizontally
    alignItems: 'center', // Center content vertically
    fontSize: '16px', // Font size
    color: '#333', // Text color
    borderLeft: '5px solid #023f81', // Left border for design
    width: '100%', // Full width relative to its parent container
    boxSizing: 'border-box', // Include padding and border in the element's total width and height
    overflow: 'hidden', // Prevent content from spilling out
    textOverflow: 'ellipsis', // Use ellipsis for text that is too long
    whiteSpace: 'nowrap', // Prevent text from wrapping to the next line
  },
  text: {
    margin: '0', // Remove default paragraph margin
  },
};

const LineItem = ({ content }) => {
  return (
    <div style={styles.lineItem}>
      <p style={styles.text}>{content}</p>
    </div>
  );
};

export default LineItem;
