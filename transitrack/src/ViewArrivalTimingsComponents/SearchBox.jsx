import React, { useEffect, useRef, useState } from 'react';
import { db } from '../firebase'; // Adjust this path as needed
import MapComponent from './MapComponent';
import { collection, writeBatch, doc, getDocs, deleteDoc } from 'firebase/firestore';
import BusArrivalTimingContainer from './BusArrivalTimingContainer';


// Styles for the input box
const styles = {
  inputBox: {
    cursor: 'text',
    top: '50px',
    left: '50px',
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
    marginTop: '70px',
    marginLeft: '40px',
  },
};

const SearchBox = ({ label, onLocationChange, isScriptLoaded }) => {
  const inputRef = useRef(null);
  const autocompleteRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showMap, setShowMap] = useState(false);
  const [selectedBusStopLocation, setSelectedBusStopLocation] = useState(null);
  const [busTimings, setBusTimings] = useState([]);
  const [showInstruction, setShowInstruction] = useState(false);

  // Function to handle when a bus stop is selected on the map
  const handleBusStopSelect = (location) => {
    setSelectedBusStopLocation(location);
    // You can now pass this location as a prop wherever it's needed
  };

  const updateBusTimings = (newTimings) => {
    setBusTimings(newTimings);
  };

  useEffect(() => {
    if (isScriptLoaded && !autocompleteRef.current) {
      const inputElement = inputRef.current;
      autocompleteRef.current = new window.google.maps.places.Autocomplete(inputElement, {
        componentRestrictions: { country: 'SG'},
      });

      autocompleteRef.current.addListener('place_changed', () => {
        const place = autocompleteRef.current.getPlace();
        if (place && place.formatted_address) {
          const location = place.geometry.location;
          const latLng = {
            latitude: location.lat(),
            longitude: location.lng(),
          };
          onLocationChange(latLng);
          setInputValue(place.formatted_address || place.name);
          setSelectedLocation(latLng); // Save the selected location as an object with lat and lng
        }
      });
    }
  }, [isScriptLoaded, onLocationChange]);

  useEffect(() => {
    if (selectedLocation) {
      setShowMap(true);
      setShowInstruction(true);
    }
  }, [selectedLocation]);

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        style={styles.inputBox}
        placeholder={label}
        aria-label="Enter location"
        value={inputValue}
      />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}></div>
        {showMap && selectedLocation && (
          <MapComponent 
            isScriptLoaded={isScriptLoaded}
            latitude={selectedLocation.latitude}
            longitude={selectedLocation.longitude}
            onBusStopSelect={handleBusStopSelect}
            updateBusTimings={updateBusTimings}
          />
      )}
        {/* Instruction text */}
        {showInstruction && (
        <div style={{
          position: 'absolute',
          top: '251px',
          left: '25%',
          transform: 'translateX(-50%)',
          padding: '10px',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          borderRadius: '5px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
          zIndex: 999
        }}>
          Click on nearby bus stops to view bus timings
        </div>
      )}
      <div style={{ position: 'absolute', top: '180px', left: '75%', transform: 'translateX(-50%)', zIndex: 1000, }}>
        {busTimings.map((busTimings, index) => {
          // Make sure the necessary data is present
          const estimatedArrival = busTimings.NextBus?.EstimatedArrival;
          const nextEstimatedArrival = busTimings.NextBus2?.EstimatedArrival;
          console.log(busTimings.ServiceNo);
          console.log(estimatedArrival);
          console.log(nextEstimatedArrival);
          
          // Conditionally render the BusArrivalTimingContainer only if we have both estimated arrival times
          return estimatedArrival && nextEstimatedArrival ? (
            <BusArrivalTimingContainer
              key={index}
              service={busTimings.ServiceNo}
              estimatedArrival={estimatedArrival}
              nextEstimatedArrival={nextEstimatedArrival}
            />
          ) : null; // or some other fallback UI
        })}
      </div>
    </div>
    
  );
};

SearchBox.defaultProps = {
  label: 'Enter a location',
};

export default SearchBox;