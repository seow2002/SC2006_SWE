import React from 'react';
import { Link } from 'react-router-dom';
import DiscoverBestRouteBackground from './DiscoverBestRouteBackground';
import DiscoverBestRouteIcon1 from './DiscoverBestRouteIcon1';
import DiscoverBestRouteIcon2 from './DiscoverBestRouteIcon2';
import DiscoverBestRouteIcon3 from './DiscoverBestRouteIcon3';
import DiscoverBestRouteText from './DiscoverBestRouteText';

// The main component style, acting as the container
const styles = {
  mainContainer: {
    position: 'relative', // All children will be positioned absolutely within this container
    width: '274px', // Match width of the background card
    height: '406px', // Match height of the background card
    margin: '0', // Set the margin you need to position the whole block within its parent
    top: '243px', // Position from the top of the parent
    left: '118px', // Position from the left of the parent
  },
};

// The main component
const DiscoverBestRouteContainer = () => {
  return (
    <Link to="/discoverbestroutes" style={{ textDecoration: 'none' }}> 
      <div style={styles.mainContainer}>
        <DiscoverBestRouteBackground>
          <DiscoverBestRouteIcon1 />
          <DiscoverBestRouteIcon2 />
          <DiscoverBestRouteIcon3 />
          <DiscoverBestRouteText />
        </DiscoverBestRouteBackground>
      </div>
    </Link>
  );
};

export default DiscoverBestRouteContainer;