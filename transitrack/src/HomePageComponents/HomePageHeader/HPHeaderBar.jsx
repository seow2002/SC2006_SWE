import React from 'react';
import HPLogo from './HPLogo';
import HPPointsIndicator from './HPPointsIndicator';
import HPProfileButton from './HPProfileButton';
import HPTransiTrackText from './HPTransiTrackText';


const styles = {
  Header: {
    zIndex: 10, // This ensures it is above the background
    top: '0px',
    left: '0px', 
    width: '1920px',
    height: '100px',
    backgroundColor: '#282828',
    boxShadow: '2px -2px 10px rgba(3,3,3,0.1)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center', // Vertically center the items
    justifyContent: 'space-between',
  },
  alignLeft: {
    display: 'flex',
    //justifyContent: 'flex-start',
    alignItems: 'center',
  },
  alignRight: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  spacing: {
    marginLeft: '20px', //margin space
  }
};

const HPHeader = (props) => {
  return (
    <div style={styles.Header}>
      <div style ={styles.alignLeft}>
      <HPLogo/>
      <HPTransiTrackText style = {styles.spacing}/>
      </div>
      {props.children}
    </div>
  );
};

export default HPHeader;