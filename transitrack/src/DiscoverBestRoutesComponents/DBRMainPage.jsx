import React, { useState } from 'react';
import DBRHeaderBar from './DBRHeader/DBRHeaderBar';
import InputLocationContainer from './InputLocation/InputLocationContainer';
import DBRBackground from './DBRBackground';
import DBRIcon1 from './DBRIcon1';
import DBRIcon2 from './DBRIcon2';
import DBRIcon3 from './DBRIcon3';
import DiscoverBestRouteText from './DiscoverBestRouteText';
import MapComponent from './MapComponent';
import RouteOptionsComponent from './RouteOptionsComponent';
import StartJourneyButton from './StartJourneyButton';
import Journey from './Journey'; 
import ChooseDestinationInput from './InputLocation/ChooseDestinationInput';
import UpdatePoints from './UpdatePoints';
import ChooseStartingPointInput from './InputLocation/ChooseStartingPointInput';

const styles = {
  DMRMainPage: {
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  contentContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  mapContainer: {
    flex: 0,
    height: '50%',
  }
};

const DBRMainPage = () => {
  const [startingPoint, setStartingPoint] = useState('');
  const [destination, setDestination] = useState('');
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [destinationLat, setDestinationLat] = useState(null);
  const [destinationLng, setDestinationLng] = useState(null);
  const [isJourneyStarted, setIsJourneyStarted] = useState(false);
  const [startingPointLat, setStartingPointLat] = useState(null);
  const [startingPointLng, setStartingPointLng] = useState(null);
  const [pointsUpdated, setPointsUpdated] = useState(false); 
  const [pointsUpdateTriggered, setPointsUpdateTriggered] = useState(false);


  const handleStartJourney = () => {
    setIsJourneyStarted(true);
    console.log('Journey started! Destination Coordinates:', { lat: destinationLat, lng: destinationLng });
  };

  const handleEndJourney = () => {
    setIsJourneyStarted(false);
    if (!pointsUpdateTriggered) {
      setPointsUpdateTriggered(true);
    }
    console.log('Journey ended!');
  };

  // Handlers for changes in starting point and destination
  const handleStartingPointChange = (newStartingPoint) => {
    console.log('New starting point address:', newStartingPoint); // Debug log
    setStartingPoint(newStartingPoint); // Keep the address text if needed
  
    // Geocode the newStartingPoint to get lat and lng
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: newStartingPoint }, (results, status) => {
      if (status === 'OK' && results[0]) {
        const lat = results[0].geometry.location.lat();
        const lng = results[0].geometry.location.lng();
        console.log(`Geocoded Starting Coordinates: { lat: ${lat}, lng: ${lng} }`); // Log the geocoded coordinates
        setStartingPointLat(lat);
        setStartingPointLng(lng);
      } else {
        console.error('Geocode was not successful for the starting point:', status);
      }
    });
  };  

  const handleDestinationChange = (newDestination) => {
    console.log('New destination address:', newDestination); // Log the text address
    setDestination(newDestination); // Assuming you still want to keep the address text
  
    // Geocode the newDestination to get lat and lng
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: newDestination }, (results, status) => {
      if (status === 'OK' && results[0]) {
        const lat = results[0].geometry.location.lat();
        const lng = results[0].geometry.location.lng();
        console.log(`Geocoded Coordinates: { lat: ${lat}, lng: ${lng} }`); // Log the geocoded coordinates
        setDestinationLat(lat);
        setDestinationLng(lng);
      } else {
        console.error('Geocode was not successful for the following reason:', status);
      }
    });
  };  

  const handleRouteSelected = (route) => {
    setSelectedRoute(route); // Assuming this is where you store the selected route
  };

  const onPointsUpdated = () => {
    console.log('Points updated');
    setPointsUpdated(true); // Indicate that points have been successfully updated
  };

  return (
    <div style={styles.DMRMainPage}>
      <div style={styles.contentContainer}>
        <DBRBackground/>
        <DBRHeaderBar/>
        <InputLocationContainer 
          onStartingPointChange={handleStartingPointChange}
          onDestinationChange={handleDestinationChange}
          isScriptLoaded={!!window.google}
        />
        <DiscoverBestRouteText/>
        <DBRIcon1/>
        <DBRIcon2/>
        <DBRIcon3/>
        <RouteOptionsComponent
          startingPoint={startingPoint}
          destination={destination}
          onRouteSelected={handleRouteSelected}
        />
      </div>
      <div style={styles.mapContainer}>
        <MapComponent 
          isScriptLoaded={!!window.google}
          selectedRoute={selectedRoute}
        />
      </div>
      <ChooseDestinationInput
        destination={destination}
        onDestinationChange={handleDestinationChange}
      />
      <ChooseStartingPointInput
        startingPoint={startingPoint}
        onStartingPointChange={handleStartingPointChange}
        isScriptLoaded={!!window.google}
      />
      <div style={{ position: 'relative', height: '100%' }}>
        {!isJourneyStarted && selectedRoute && (
          <StartJourneyButton onStartClick={handleStartJourney} />
        )}
        {isJourneyStarted && destinationLat && destinationLng && (
          <Journey
            destinationLat={destinationLat}
            destinationLng={destinationLng}
            onJourneyEnd={handleEndJourney}
          />
        )}
        {pointsUpdateTriggered && destinationLat && destinationLng && startingPointLat && startingPointLng && (
          <UpdatePoints
            startPoint={{ lat: startingPointLat, lng: startingPointLng }}
            endPoint={{ lat: destinationLat, lng: destinationLng }}
            onPointsUpdated={() => {
              console.log('Points update process completed');
              // Optionally reset pointsUpdateTriggered here if you want to allow the process to be triggered again in the future
            }}
          />
        )}
      </div>
    </div>
  );
};

export default DBRMainPage;