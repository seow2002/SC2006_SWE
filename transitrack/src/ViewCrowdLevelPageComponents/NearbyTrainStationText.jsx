import React from 'react';

const styles = {
  Text: {
    position: 'absolute',
    color: '#ffffff',
    fontSize: '24px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 600,
    lineHeight: '30px',
    top: '150px',
    left: '300px',
  },
};

const defaultProps = {
  text: 'Nearby train stations',
};

const NearbyTrainStationText = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default NearbyTrainStationText;