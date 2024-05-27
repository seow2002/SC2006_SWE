import React from 'react';
import { Link } from 'react-router-dom';
import PointsRewardsBackground from './PointsRewardsBackground';
import PointsRewardsIcon1 from './PointsRewardsIcon1';
import PointsRewardsIcon2 from './PointsRewardsIcon2';
import ClaimRewardsText from './ClaimRewardsText';
import PointsText from './PointsText';

// The main component style, acting as the container
const styles = {
  mainContainer: {
    position: 'absolute', // All children will be positioned absolutely within this container
    width: '274px', // Match width of the background card
    height: '406px', // Match height of the background card
    margin: '0', // Set the margin you need to position the whole block within its parent
    top: '1578px', // Position from the top of the parent
    left: '1080px', // Position from the left of the parent
  },
  icon1: { // Update the icon styles to set size
    fill: '#ffffff',
    width: '192px',
    height: '112px',
    // You will set position in the child component if needed
  },
  icon2: { // Update the icon styles to set size
    fill: '#ffffff',
    width: '128px',
    height: '174px',
    // You will set position in the child component if needed
  },
  text: { // Text styles, assuming you want it centered within the card
    color: '#ffffff',
    fontSize: '24px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 700,
    lineHeight: '31px',
    textAlign: 'center',
    // You will set position in the child component if needed
  }
};

// The main component
const PointsRewardsContainer = () => {
  return (
    <Link to="/pointsandrewards" style={{ textDecoration: 'none' }}> 
      <div style={styles.mainContainer}>
        <PointsRewardsBackground> {/* Background component, might not need to pass children */}
          <PointsRewardsIcon1 style={styles.icon1} />
          <PointsRewardsIcon2 style={styles.icon2} />
          <ClaimRewardsText text="Claim Rewards" style={styles.text} />
          <PointsText text="Points" style={styles.text} />
        </PointsRewardsBackground>
      </div>
    </Link>
  );
};

export default PointsRewardsContainer;
