import React from 'react';

const styles = {
  Card: {
    top: '383px',
    left: '1338px',
    width: '53px',
    height: '30px',
    backgroundColor: '#bebebe',
    borderRadius: '32.480000000000004px',
    marginLeft: '73px',
  },
};

const ClosedColor = (props) => {
  return (
    <div style={styles.Card}>
      {props.children}
    </div>
  );
};

export default ClosedColor;