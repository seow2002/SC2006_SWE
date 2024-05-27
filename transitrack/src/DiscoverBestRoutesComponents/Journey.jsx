import React, { useState, useEffect } from 'react';
import EndJourneyButton from './EndJourneyButton';

const isNearDestination = (currentLocation, destinationCoords) => {
  const threshold = 0.005; // Adjust based on required proximity (in degrees)
  return (
    Math.abs(currentLocation.lat - destinationCoords.lat) < threshold &&
    Math.abs(currentLocation.lng - destinationCoords.lng) < threshold
  );
};

const Journey = ({ destinationLat, destinationLng, onJourneyEnd }) => {
  const [userLocation, setUserLocation] = useState(null);
  const [journeyEnded, setJourneyEnded] = useState(false);

  useEffect(() => {
    if (!destinationLat || !destinationLng) return; // Exit if destination coordinates are not provided

    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ lat: latitude, lng: longitude });

        console.log(`Current Location: { lat: ${latitude}, lng: ${longitude} }`);
        console.log(`Destination: { lat: ${destinationLat}, lng: ${destinationLng} }`);

        if (isNearDestination({ lat: latitude, lng: longitude }, { lat: destinationLat, lng: destinationLng })) {
            console.log("You have reached your destination.");
            navigator.geolocation.clearWatch(watchId);
            setJourneyEnded(true);
          } else {
            const distanceToDestination = Math.sqrt(Math.pow(latitude - destinationLat, 2) + Math.pow(longitude - destinationLng, 2));
            console.log(`Distance to destination: ${distanceToDestination} (approximate degrees)`);
          }
        },
        (error) => console.log(error),
        { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
      );
    
      return () => navigator.geolocation.clearWatch(watchId); // Cleanup function
    }, [destinationLat, destinationLng]); // This effect depends on destinationLat and destinationLng
  return (
    <div>
      {journeyEnded && <EndJourneyButton onEndClick={onJourneyEnd} />}
    </div>
  );
};

export default Journey;
