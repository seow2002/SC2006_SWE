import React, { useEffect, useRef } from 'react';

const styles = {
  Input: {
    position: 'absolute',
    cursor: 'text',
    top: '30px',
    left: '48px',
    width: '502px',
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


const ChooseDestinationInput = ({ label, destination, onDestinationChange, isScriptLoaded }) => {
  const inputRef = useRef(null);
  const autocompleteRef = useRef(null);

  useEffect(() => {
    if (isScriptLoaded) {
      const inputElement = inputRef.current; // Assign to a variable
  
      // Only set up the autocomplete if it hasn't been set up already
      if (!autocompleteRef.current) {
        autocompleteRef.current = new window.google.maps.places.Autocomplete(inputElement);
  
        autocompleteRef.current.addListener('place_changed', () => {
          const place = autocompleteRef.current.getPlace();
          if (place && place.formatted_address) {
            onDestinationChange(place.formatted_address);
          } else if (place && place.name) {
            onDestinationChange(place.name);
          }
        });
      }
  
      // Cleanup function to remove the listener when the component unmounts
      return () => {
        if (autocompleteRef.current) {
          window.google.maps.event.clearInstanceListeners(inputElement); // Use the variable here
        }
      };
    }
    // It's important that you do not include onDestinationChange or autocompleteRef in the dependency array,
    // because you don't want to re-run this effect when those change.
  }, [isScriptLoaded]); // Only re-run if isScriptLoaded changes
  

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    console.log('New destination input:', newValue); // Debug log
    onDestinationChange(newValue);
  };

  return (
    <input
      ref={inputRef}
      type="text"
      value={destination}
      onChange={handleInputChange}
      style={styles.Input}
      placeholder={label}
      aria-label="Destination" // For accessibility
    />
  );
};

// Since defaultProps is used, make sure to define it
ChooseDestinationInput.defaultProps = {
  label: 'Choose destination',
};

export default ChooseDestinationInput;
