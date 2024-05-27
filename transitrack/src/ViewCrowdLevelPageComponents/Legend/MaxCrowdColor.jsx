import React from 'react';

const styles = {
    Card: {
      top: '348px',
      left: '1338px',
      width: '53px',
      height: '30px',
      backgroundColor: '#e30f03',
      borderRadius: '32.480000000000004px',
      marginLeft: '37px',
    },
  };

const MaxCrowdColor = (props) => {
  return (
    <div style={styles.Card}>
      {props.children}
    </div>
  );
};

export default MaxCrowdColor;