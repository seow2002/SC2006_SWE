import React, { useState } from 'react';
import Header from './VATHeader/Header';
import SearchBox from './SearchBox';
import BackgroundImage from './BackgroundImage';



const styles = {
  VATMainPage: {
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', 
    justifyContent: 'flex-start',
    overflow: 'scroll',
  },

};

const VATMainPage = (props) => {
  const [location, setLocation] = useState('');

  // Handlers for changes in location
  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
  }

  return (
    <div style={styles.VATMainPage}>
      <BackgroundImage/>
      <Header/>
      <SearchBox 
        onLocationChange={handleLocationChange}
        location={location}
        isScriptLoaded={!!window.google}/>
      {props.children}
    </div>
  );
};

export default VATMainPage;
