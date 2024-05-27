import React from 'react';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    borderBottom: '1px solid #ccc', // Just as an example, add a bottom border to each line
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Semi-transparent white for visibility against the background
    color: '#000000', // White color for the text to stand out against the dark background
    margin: '5px 0', // Add some margin between the lines
  },
  date: {
    flexBasis: '20%', // Adjust the width as needed
  },
  content: {
    flexBasis: '60%', // Adjust the width as needed
    textAlign: 'center',
  },
  points: {
    flexBasis: '20%', // Adjust the width as needed
    textAlign: 'right',
  }
};

const HorizontalDivider = ({ date, content, points }) => {
  return (
    <div style={styles.container}>
      <span style={styles.date}>{date}</span>
      <span style={styles.content}>{content}</span>
      <span style={styles.points}>{points} points</span>
    </div>
  );
};

export default HorizontalDivider;
