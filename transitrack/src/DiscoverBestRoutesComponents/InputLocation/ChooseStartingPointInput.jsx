import React, { useEffect, useRef } from 'react';

const styles = {
  Input: {
    // Assuming you will adjust the absolute positioning to fit your layout
    position: 'absolute',
    cursor: 'text',
    top: '-75px', // Updated for demonstration
    left: '48px', // Updated for demonstration
    width: '502px', // Adjust width as needed
    height: '40px',
    padding: '0px 8px',
    border: '0',
    borderBottom: '1px solid #bebebe',
    boxSizing: 'border-box',
    backgroundColor: '#363636',
    color: '#bebebe',
    fontSize: '18px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 500,
    lineHeight: '22px',
    outline: 'none',
    zIndex: 2, // Ensure it's above the map
  },
};

const ChooseStartingPointInput = ({ label, startingPoint, onStartingPointChange, isScriptLoaded }) => {
  const inputRef = useRef(null);
  const autocompleteRef = useRef(null);

  useEffect(() => {
    if (isScriptLoaded) {
      const inputElement = inputRef.current; 
      // Ensure the Autocomplete is only initialized if the script is loaded
      if (!autocompleteRef.current) {
        autocompleteRef.current = new window.google.maps.places.Autocomplete(inputElement);
        autocompleteRef.current.addListener('place_changed', () => {
          const place = autocompleteRef.current.getPlace();
          if (place && place.formatted_address) {
            onStartingPointChange(place.formatted_address);
          } else if (place && place.name) {
            onStartingPointChange(place.name);
          }
        });
      }
      // Cleanup function to remove the listener
      return () => {
        if (autocompleteRef.current) {
          window.google.maps.event.clearInstanceListeners(inputElement);
        }
      };
    }
  }, [isScriptLoaded]); 
  
  const handleInputChange = (event) => {
    const newValue = event.target.value;
    console.log('New starting point input:', newValue); // Debug log
    onStartingPointChange(newValue);
  };

  return (
    <input
      ref={inputRef}
      type="text"
      value={startingPoint}
      onChange={handleInputChange}
      style={styles.Input}
      placeholder={label}
      aria-label="Starting point" // For accessibility
    />
  );
};

ChooseStartingPointInput.defaultProps = {
  label: 'Choose starting point',
};

export default ChooseStartingPointInput;
