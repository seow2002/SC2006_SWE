import React from 'react';
import { Link } from 'react-router-dom';
import ViewBusArrivalTimingBackground from './ViewBusArrivalTimingBackground';
import ViewBusArrivalTimingIcon from './ViewBusArrivalTimingIcon';
import ViewBusArrivalTimingText from './ViewBusArrivalTimingText';

// The main component style, acting as the container
const styles = {
  mainContainer: {
    position: 'absolute', // All children will be positioned absolutely within this container
    width: '274px', // Match width of the background card
    height: '406px', // Match height of the background card
    margin: '0 auto', // Center the block horizontally if needed, or set other margin
    top: '755px', // Position from the top within its parent
    left: '1025px', // Position from the left within its parent
  },
  icon: { // Update the icon styles to remove top and left, and set size
    fill: '#ffffff',
    width: '124px',
    height: '126px',
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
const ViewBusArrivalContainer = () => {
  return (
    <Link to="/viewarrivaltimings" style={{ textDecoration: 'none' }}> 
      <div style={styles.mainContainer}>
        <ViewBusArrivalTimingBackground> {/* Background component, might not need to pass children */}
          <ViewBusArrivalTimingIcon style={styles.icon} />
          <ViewBusArrivalTimingText style={styles.text} />
        </ViewBusArrivalTimingBackground>
      </div>
    </Link>
  );
};

export default ViewBusArrivalContainer;
