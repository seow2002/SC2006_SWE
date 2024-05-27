import React, { useState, useEffect } from 'react';

const MapComponent = ({ isScriptLoaded, selectedRoute }) => {
  const [map, setMap] = useState(null);
  const [directionsRenderer, setDirectionsRenderer] = useState(null); // Keep track of the directionsRenderer instance

  useEffect(() => {
    if (isScriptLoaded && !map) {
      console.log('initMap callback executed.');
      const mapElement = document.getElementById('map');
      if (mapElement) {
        const localMap = new window.google.maps.Map(mapElement, {
          center: { lat: 1.3521, lng: 103.8198 },
          zoom: 12,
        });
        setMap(localMap);
        // Initialize the directionsRenderer here
        const dirRenderer = new window.google.maps.DirectionsRenderer();
        dirRenderer.setMap(localMap);
        setDirectionsRenderer(dirRenderer);
      } else {
        console.error('Map element not found');
      }
    }
  }, [isScriptLoaded]); // Removed 'map' from dependencies to prevent re-running when map state updates

  useEffect(() => {
    if (map && directionsRenderer && selectedRoute) {
      console.log('Selected route:', selectedRoute);
      console.log('Calculating route.');

      const directionsService = new window.google.maps.DirectionsService();

      // Clear the previous directions from the map before setting new ones
      directionsRenderer.setMap(null);
      directionsRenderer.setMap(map);

      directionsService.route({
        origin: selectedRoute.legs[0].start_location,
        destination: selectedRoute.legs[0].end_location,
        travelMode: window.google.maps.TravelMode.TRANSIT,
      }, (response, status) => {
        if (status === 'OK') {
          directionsRenderer.setDirections(response);
          console.log('Route calculated and displayed.');
        } else {
          console.error('Directions request failed due to ' + status);
        }
      });
    }
  }, [map, selectedRoute]); // Include selectedRoute in dependencies

  return <div id="map" style={{ width: '52%', height: '1000px', left: '48%', marginTop: '100px' }} />;
};

export default MapComponent;
