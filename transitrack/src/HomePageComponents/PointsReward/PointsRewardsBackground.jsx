import React from 'react';

const styles = {
  Card: {
    position:'absolute',
    top: '-1370px',
    left: '152px',
    width: '274px',
    height: '406px',
    backgroundColor: '#023f81',
    borderRadius: '32.480000000000004px',
  },
};

const PointsRewardsBackground = (props) => {
  return (
    <div style={styles.Card}>
      {props.children}
    </div>
  );
};

export default PointsRewardsBackground;