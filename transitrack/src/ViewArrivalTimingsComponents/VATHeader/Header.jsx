import React from 'react';
import Logo from './HeaderLogo';
import PointsDisplay from './PointsDisplay';
import ProfileButton from './ProfileButton';
import TransiTrackText from './TransiTrack(Text)';


const styles = {
  Header: {
    zIndex: 10, // This ensures it is above the background
    top: '0px',
    left: '0px', 
    width: '100vw',
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

const Header = (props) => {
  return (
    <div style={styles.Header}>
      <div style ={styles.alignLeft}>
      <Logo/>
      <TransiTrackText style = {styles.spacing}/>
      </div>
      {props.children}
    </div>
  );
};

export default Header;