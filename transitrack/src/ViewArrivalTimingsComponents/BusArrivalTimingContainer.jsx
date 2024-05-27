// BusTiming.js
import React from 'react';

const calculateArrivalTime = (estimatedArrival) => {
  const arrivalTime = new Date(estimatedArrival);
  const currentTime = new Date();
  const minutes = Math.round((arrivalTime - currentTime) / 60000);
  console.log(minutes);
  return minutes > 0 ? minutes : 'Arriving';
};

const BusArrivalTimingContainer = ({ service, estimatedArrival, nextEstimatedArrival }) => (
    <div style={{
      display: 'inline-block',
      margin: '0.5rem', // Increased margin
      padding: '1rem', // Increased padding
      backgroundColor: '#023f81',
      color: 'white', // Changed text color to white for better contrast
      borderRadius: '10px',
      width: '180px', // Set a fixed width or you could use min-width for a responsive width
      zIndex: 1000, // Ensure it's on top of the map
      boxShadow: '0 2px 4px rgba(0,0,0,0.2)' // Optional: adds a shadow for better visibility
    }}>
      <div>Service: {service}</div>
      <div>Arriving (min): {calculateArrivalTime(estimatedArrival)}</div>
      <div>Next (min): {calculateArrivalTime(nextEstimatedArrival)}</div>
    </div>
  );
  


export default BusArrivalTimingContainer;
