import React from 'react';

const getBubbleColor = (volume) => {
  if (volume < 500) return 'green';
  if (volume >= 500 && volume < 1000) return 'orange';
  return 'red'; // 1000 and above
};

const BusStopCrowdVisualization = ({ crowdData }) => {
  const textHeight = 30; // Height of the text element
  const spacing = 10; // Additional space between the text and the visualization

  const splitCrowdData = crowdData.reduce((acc, curr, index) => {
    const columnIndex = index % 2;
    acc[columnIndex].push(curr);
    return acc;
  }, [[], []]);

  return (
    <>
      {splitCrowdData.map((column, columnIndex) => (
        <div
          key={columnIndex}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            position: 'absolute',
            top: `${180 + textHeight + spacing}px`, // Calculated based on the position of the NearbyBusStopText
            left: columnIndex === 0 ? '750px' : '950px', // Adjust the left position for the second column
          }}
        >
          {column.map((busStop, index) => {
            const bubbleColor = getBubbleColor(busStop.volume);
            return (
              <div
                key={index}
                style={{
                  padding: '10px 20px',
                  borderRadius: '20px',
                  color: 'white',
                  backgroundColor: bubbleColor,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontWeight: 'bold',
                  //left: '200px',
                }}
              >
                {busStop.stopName}
              </div>
            );
          })}
        </div>
      ))}
    </>
  );
};

export default BusStopCrowdVisualization;
