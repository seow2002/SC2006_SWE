import React from 'react';

// Function to determine bubble color based on crowd level
const getBubbleColor = (crowdLevel) => {
  switch (crowdLevel) {
    case 'l': return 'green'; // Low crowd level
    case 'm': return 'orange'; // Medium crowd level
    case 'h': return 'red'; // High crowd level
    default: return 'grey'; // Unknown or other values
  }
};

const TrainStationVisualization = ({ stationDensities }) => {
  const textHeight = 30; // Height of the text element
  const spacing = 10; // Additional space between the text and the visualization

  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        position: 'absolute',
        top: `${180 + textHeight + spacing}px`, // Adjust position as needed
        left: '220px', // Adjust position as needed
      }}>
      {stationDensities.map(({ stationCode, stationName, CrowdLevel }, index) => {
        const bubbleColor = getBubbleColor(CrowdLevel);
        return (
          <div
            key={stationCode} // Use stationCode as key for uniqueness
            style={{
              padding: '10px 20px',
              borderRadius: '20px',
              color: 'white',
              backgroundColor: bubbleColor,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: 'bold',
            }}
          >
            {stationName}
          </div>
        );
      })}
    </div>
  );
};

export default TrainStationVisualization;
