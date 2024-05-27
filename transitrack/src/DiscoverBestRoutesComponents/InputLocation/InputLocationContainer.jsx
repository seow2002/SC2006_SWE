import React from 'react';
import ChooseStartingPointInput from './ChooseStartingPointInput';
import ChooseDestinationInput from './ChooseDestinationInput';
import DestinationIcon from './DestinationIcon';
import HollowCircleIcon from './HollowCircleIcon';
import WhiteDotIcon1 from './WhiteDotIcon1';
import WhiteDotIcon2 from './WhiteDotIcon2';
import WhiteDotIcon3 from './WhiteDotIcon3';

// Main container styles
const styles = {
  inputLocationContainer: {
    position: 'absolute', // Assuming you want to position this container absolutely
    top: '290px', // Adjust as needed
    left: '120px', // Adjust as needed
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '502px', // Match width of the dropdowns
  },
  iconStyles: {
    // common styles for icons if they are identical
    position: 'absolute',
    left: '-32px', // Adjust to align icons to the left of the dropdowns
    color: '#ffffff',
  },
  inputStyles: {
    width: '100%', // Dropdowns take full width of the container
    marginBottom: '20px', // Space between dropdowns
  }
};

const InputLocationContainer = ({ isScriptLoaded, onStartingPointChange, onDestinationChange }) => {

  return (
    <div style={styles.inputLocationContainer}>
      <HollowCircleIcon style={{ ...styles.iconStyles, top: '0px' }} />
      <ChooseStartingPointInput
        style={styles.inputStyles}
        onStartingPointChange={onStartingPointChange} // Pass the function from parent component
        isScriptLoaded={isScriptLoaded} // Pass isScriptLoaded to the starting point input
      />
      <WhiteDotIcon1 style={{ ...styles.iconStyles, top: '40px' }} />
      <WhiteDotIcon2 style={{ ...styles.iconStyles, top: '62px' }} />
      <WhiteDotIcon3 style={{ ...styles.iconStyles, top: '84px' }} />
      <DestinationIcon style={{ ...styles.iconStyles, top: '106px' }} />
      <ChooseDestinationInput
        style={styles.inputStyles}
        onDestinationChange={onDestinationChange} // Pass the function from parent component
        isScriptLoaded={isScriptLoaded} // Pass isScriptLoaded to the destination input
      />
    </div>
  );
};

export default InputLocationContainer;
