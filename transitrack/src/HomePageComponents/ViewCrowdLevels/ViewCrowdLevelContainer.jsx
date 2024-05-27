import React from 'react';
import { Link } from 'react-router-dom';
import ViewCrowdLevelBackground from './ViewCrowdLevelBackground';
import ViewCrowdLevelIcon1 from './ViewCrowdLevelIcon1';
import ViewCrowdLevelIcon2 from './ViewCrowdLevelIcon2';
import ViewCrowdLevelText from './ViewCrowdLevelText';

// The main component style, acting as the container
const styles = {
  mainContainer: {
    position: 'absolute', // All children will be positioned absolutely within this container
    width: '274px', // Match width of the background card
    height: '406px', // Match height of the background card
    margin: '0 auto', // Center the block horizontally if needed, or set other margin
    top: '1165px', // Position from the top within its parent
    left: '1460px', // Position from the left within its parent
  },
  icon1: { // Update the icon styles to remove top and left, and set size
    fill: '#ffffff',
    width: '192px',
    height: '144px',
  },
  icon2: { // Same here for the second icon
    fill: '#ffffff',
    width: '40px',
    height: '40px',
  },
  text: { // Text styles, assuming you want it centered within the card
    color: '#ffffff',
    fontSize: '24px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 700,
    lineHeight: '31px',
    position: 'absolute',
    bottom: '20px', // Adjust as necessary
    width: '100%', // Ensure the text container spans the width of the card
    textAlign: 'center',
  }
};

// The main component
const ViewCrowdLevelContainer = () => {
  return (
    <Link to="/viewcrowdlevel" style={{ textDecoration: 'none' }}> 
      <div style={styles.mainContainer}>
        <ViewCrowdLevelBackground> {/* Background component, might not need to pass children */}
          <ViewCrowdLevelIcon1 style={styles.icon1} />
          <ViewCrowdLevelIcon2 style={styles.icon2} />
          <ViewCrowdLevelText style={styles.text} />
        </ViewCrowdLevelBackground>
      </div>
    </Link>
  );
};

export default ViewCrowdLevelContainer;
