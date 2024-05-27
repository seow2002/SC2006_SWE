import React, { useState } from 'react';
import VCLHeaderBar from './VCLHeader/VCLHeaderBar';
import NearbyBusStopText from './NearbyBusStopText';
import BusStopIcon from './BusStopIcon';
import NearbyTrainStationText from './NearbyTrainStationText';
import MRTStationIcon from './MRTStationIcon';
import VCLBackground from './VCLBackground';
import LegendContainer from './Legend/LegendContainer';
import CurrentLocation from './CurrentLocation';
import NearbyBusStops from './NearbyBusStops';
import NearbyTrainStations from './NearbyTrainStations';
import GetBusStopCrowdLevel from './GetBusStopCrowdLevel'; 
import BusStopCrowdVisualization from './BusStopCrowdVisualisation';
import GetTrainStationPlatformDensity from './GetTrainStationPlatformDensity';
import TrainStationVisualization from './TrainStationVisualisation';
import InsertLocation from './InsertLocation';

const styles = {
  ViewCrowdLevelPage: {
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  mapsContainer: { // Style for the container holding both maps
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Other styles remain unchanged
};

const ViewCrowdLevelPage = (props) => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [crowdLevels, setCrowdLevels] = useState([]);
  const [stationDensities, setStationDensities] = useState([]);

  const updateCrowdLevels = (levels) => {
    setCrowdLevels(levels);
  };

  const handleLocationSelected = (location) => {
    setCurrentLocation(location);

    // You might want to call other functions that depend on the location here
    // For example, if you want to fetch crowd levels or station densities based on the new location:
    // getBusStopCrowdLevel(location);
    // getTrainStationPlatformDensity(location);
  };

  return (
    <div style={styles.ViewCrowdLevelPage}>
      <VCLBackground />
      <VCLHeaderBar />
      <BusStopIcon />
      <NearbyBusStopText />
      <MRTStationIcon />
      <NearbyTrainStationText />
      <LegendContainer />
      {/* Replace or remove CurrentLocation and use InsertLocation instead */}
      <CurrentLocation onLocationIdentified={handleLocationSelected} />
      {/* Conditionally render maps and visualizations if currentLocation is available */}
      {currentLocation && (
        <div style={styles.mapsContainer}>
          <NearbyTrainStations latitude={currentLocation.latitude} longitude={currentLocation.longitude} />
          <NearbyBusStops latitude={currentLocation.latitude} longitude={currentLocation.longitude} />
          <GetBusStopCrowdLevel updateCrowdLevels={updateCrowdLevels} />
          <BusStopCrowdVisualization crowdData={crowdLevels} />
          <GetTrainStationPlatformDensity onDensitiesFetched={setStationDensities} />
          <TrainStationVisualization stationDensities={stationDensities} />
        </div>
      )}
      {props.children}
    </div>
  );
};

export default ViewCrowdLevelPage;
