import React, { useEffect, useRef, useState } from 'react';

const InsertLocation = ({ onLocationSelected }) => {
  const inputRef = useRef(null);
  const [address, setAddress] = useState("");

  // Initialize Google Autocomplete
  useEffect(() => {
    if (!window.google) {
      console.error('Google Maps JavaScript API library is not loaded.');
      return;
    }

    const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current);
    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      if (place.geometry) {
        onLocationSelected({
          latitude: place.geometry.location.lat(),
          longitude: place.geometry.location.lng()
        });
        setAddress(place.formatted_address || place.name);
      }
    });
  }, [onLocationSelected]);

  // Get the current location of the user
  const handleCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        onLocationSelected({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      }, (error) => {
        console.error('Error getting current position:', error);
      });
    }
  };

  return (
    <div style={{ position: 'absolute', top: 150, left: 0, right: 0, width: '30%' }}>
      <input
        ref={inputRef}
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        style={{
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
            marginTop: '0px',
            marginLeft: '40px',
        }}
        placeholder="Enter a location"
      />
      <button onClick={handleCurrentLocation} style={{
          // Button styling
          cursor: 'pointer',
          padding: '10px 20px',
          border: 'none',
          backgroundColor: '#5c5c5c',
          color: 'white',
          fontSize: '16px',
          borderRadius: '5px',
          marginTop: '10px', // Ensure there's some space above the button
        }}>
        Use Current Location
      </button>
    </div>
  );
};

export default InsertLocation;