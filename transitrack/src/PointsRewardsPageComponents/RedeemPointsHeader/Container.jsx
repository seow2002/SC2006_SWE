import React from 'react';
import PointsIcon from './Icon';
import Text from './Text';


const styles = {
    Container: {
      zIndex: 10, // This ensures it is above the background
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center', // Vertically center the items
      marginLeft: '30px',
      marginTop: '30px',
    },
  };
  
  const Container = (props) => {
    return (
      <div style={styles.Container}>
        <PointsIcon/>
        <Text/>
        {props.children}
      </div>
    );
  };
  
  export default Container;