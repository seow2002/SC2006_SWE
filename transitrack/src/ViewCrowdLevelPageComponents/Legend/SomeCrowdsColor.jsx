import React from 'react';

const styles = {
  Card: {
    top: '313px',
    left: '1338px',
    width: '53px',
    height: '30px',
    backgroundColor: '#ff9500',
    borderRadius: '32.480000000000004px',
    marginLeft: '25px',
  },
};

const SomeCrowdsColor = (props) => {
  return (
    <div style={styles.Card}>
      {props.children}
    </div>
  );
};

export default SomeCrowdsColor;