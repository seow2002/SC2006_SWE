import React from 'react';

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '18px',
    fontFamily: 'Source Sans Pro',
    lineHeight: '50px',
    textAlign: 'center',
  },
};

const defaultProps = {
  text: 'Real-Time Public Transport Tracking',
};

const RealTimePublicTransportTrackingText = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default RealTimePublicTransportTrackingText;