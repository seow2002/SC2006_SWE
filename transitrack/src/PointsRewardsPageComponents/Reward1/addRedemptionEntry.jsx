// Line1.jsx (previously RedemptionEntry)
import React from 'react';

const styles = {
  entry: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#f0f0f0', // Adjust as needed
    borderBottom: '1px solid #ccc', // Just as an example, to separate entries
    // You can add more styles here as needed
  },
  date: {
    flex: 1,
    // You can add more styles here as needed
  },
  content: {
    flex: 2,
    // You can add more styles here as needed
  },
  points: {
    flex: 1,
    // You can add more styles here as needed
  },
};

const addRedemptionEntry = ({ date, content, points }) => {
  return (
    <div style={styles.entry}>
      <div style={styles.date}>{date}</div>
      <div style={styles.content}>{content}</div>
      <div style={styles.points}>{points ? `${points} points` : ''}</div>
    </div>
  );
};

export default addRedemptionEntry;
