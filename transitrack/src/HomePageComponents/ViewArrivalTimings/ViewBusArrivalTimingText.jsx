import React from 'react';
import ViewBusArrivalTimingIcon from './ViewBusArrivalTimingIcon';

const styles = {
  Text: {
    position: 'absolute',
    color: '#ffffff',
    fontSize: '24px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 700,
    lineHeight: '31px',
    top: '305px',
    left: '33px',
  },
};

const defaultProps = {
  text: 'View arrival timings',
};

const ViewBusArrivalTimingText = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default ViewBusArrivalTimingText;