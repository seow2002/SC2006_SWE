import { useEffect } from 'react';

const CurrentLocation = ({ onLocationIdentified }) => {
  useEffect(() => {
    if (!navigator.geolocation) {
      console.error('Geolocation is not supported by your browser.');
      return;
    }

    const success = (position) => {
      const { latitude, longitude } = position.coords;
      onLocationIdentified({ latitude, longitude });
    };

    const handleError = () => {
      console.error('Unable to retrieve your location.');
    };

    navigator.geolocation.getCurrentPosition(success, handleError);
  }, [onLocationIdentified]);

  return null;
};

export default CurrentLocation;