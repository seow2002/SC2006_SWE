import React from 'react';

const styles = {
  Card: {
    position: 'absolute',
    top: '-555px',
    left: '-565px',
    width: '274px',
    height: '406px',
    backgroundColor: '#023f81',
    borderRadius: '10000px',
  },
};

const ViewBusArrivalTimingBackground = (props) => {
  return (
    <div style={styles.Card}>
      {props.children}
    </div>
  );
};

export default ViewBusArrivalTimingBackground;