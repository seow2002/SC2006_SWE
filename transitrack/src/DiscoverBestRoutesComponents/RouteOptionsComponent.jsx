import React, { useState, useEffect } from 'react';
import WalkingManIcon from './InputLocation/WalkingManIcon';
import TransitIcon from './InputLocation/TransitIcon';

const RouteOptionsComponent = ({ startingPoint, destination, onRouteSelected }) => {
  const [routes, setRoutes] = useState([]);
  const [selectedRouteIndex, setSelectedRouteIndex] = useState(null);

  useEffect(() => {
    if (startingPoint && destination) {
      const directionsService = new window.google.maps.DirectionsService();

      directionsService.route({
        origin: startingPoint,
        destination: destination,
        travelMode: window.google.maps.TravelMode.TRANSIT,
        provideRouteAlternatives: true,
      }, (response, status) => {
        if (status === 'OK') {
          // Generate a unique identifier for each route based on some unique characteristics
          const uniqueRoutes = getUniqueRoutes(response.routes);

          setRoutes(uniqueRoutes);
        } else {
          console.error('Directions request failed due to ' + status);
        }
      });
    }
  }, [startingPoint, destination]);

  const getUniqueRoutes = (routes) => {
    const uniqueIdentifiers = new Set();
    return routes.filter((route) => {
      const identifier = createRouteIdentifier(route);
      if (!uniqueIdentifiers.has(identifier)) {
        uniqueIdentifiers.add(identifier);
        return true;
      }
      return false;
    });
  };

  const createRouteIdentifier = (route) => {
    // This is a simple example; you might need to build a more complex identifier based on your route data
    return route.legs.map(leg =>
      leg.steps.map(step => step.travel_mode + (step.transit?.line?.name || '')).join(',')
    ).join(';');
  };

  const handleRouteSelect = (index) => {
    setSelectedRouteIndex(index);
    onRouteSelected(routes[index]);
  };


  return (
    <div style={{
      position: 'absolute',
      top: '420px', // Adjust top position as needed
      left: '25%',
      transform: 'translateX(-50%)',
      width: '40%', // Adjust width as needed
      maxHeight: '600px', // Adjust max height as needed
      overflowY: 'auto', // Enable vertical scrolling
      padding: '10px',
      display: 'flex',
      flexDirection: 'column', // Stack children vertically
      alignItems: 'center', // Center-align items for better presentation
      gap: '10px',
    }}>
    {routes.map((route, index) => (
      <div 
        key={index} 
        onClick={() => handleRouteSelect(index)}
        style={{
        minWidth: '200px', // Ensure a minimum width for each box
        flex: 'none', // Prevent the boxes from growing or shrinking
        padding: '10px',
        borderRadius: '5px',
        backgroundColor: selectedRouteIndex === index ? '#28a745' : '#023f81',
        color: 'white',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Center-align the items vertically
        justifyContent: 'center', // Center-align the items horizontally
    }}>
        <div>Duration: {route.legs[0].duration.text}</div>
        <div style={{
        display: 'flex',
        gap: '4px',
        }}>
         {route.legs[0].steps.map((step, stepIndex) => {
              let modeDetail;
              let stepElements = [];
              console.log(step);

              if (step.travel_mode === 'TRANSIT' && step.transit && step.transit.line) {
                // Transit step, display BusIcon component and number
                const busNumber = step.transit.line.name;
                modeDetail = (
                  <>
                    <TransitIcon />
                    <span style={{ fontWeight: 'bold', fontSize: '1em', color: '#4cd964', }}>{busNumber}</span> {/* Increased size */}
                  </>
                );
              } else if (step.travel_mode === 'WALKING') {
                // Walking step, display WalkingManIcon component
                modeDetail = <WalkingManIcon />;
              }

              // Push the current step's icon or number
              stepElements.push(
                <span key={stepIndex} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  {modeDetail}
                </span>
              );

              // If not the last step, add an arrow
              if (stepIndex < route.legs[0].steps.length - 1) {
                stepElements.push(
                  <span key={`arrow-${stepIndex}`} style={{ fontSize: '1em', padding: '0 8px' }}>
                    {'>'} {/* This is your arrow */}
                  </span>
                );
              }

              // Return all elements for this step (icon/number and possibly an arrow)
              return stepElements;
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RouteOptionsComponent;
