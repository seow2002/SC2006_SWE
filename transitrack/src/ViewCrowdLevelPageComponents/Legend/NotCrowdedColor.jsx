import React from 'react';

const styles = {
    Card: {
      top: '278px',
      left: '1338px',
      width: '53px',
      height: '30.00000000000003px',
      backgroundColor: '#4cd964',
      borderRadius: '32.480000000000004px',
      marginLeft: '27px',
    },
  };

const NotCrowdedColor = (props) => {
  return (
    <div style={styles.Card}>
      {props.children}
    </div>
  );
};

export default NotCrowdedColor;