import React from 'react';

const styles = {
  Text: {
    position: 'absolute',
    color: '#ffffff',
    fontSize: '24px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 600,
    top: '160px',
    left: '800px',
  },
};

const defaultProps = {
  text: 'Nearby bus stops',
};

const NearbyBusStopText = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default NearbyBusStopText;