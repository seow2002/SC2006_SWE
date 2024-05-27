import React from 'react';

const styles = {
  Card: {
    position: 'absolute',
    top: '-140px',
    left: '-30px',
    width: '274px',
    height: '406px',
    backgroundColor: '#023f81',
    borderRadius: '64.96000000000001px',
  },
};

const DiscoverBestRouteBackground = (props) => {
  return (
    <div style={styles.Card}>
      {props.children}
    </div>
  );
};

export default DiscoverBestRouteBackground;