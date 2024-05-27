import React from 'react';

const styles = {
  Card: {
    position: 'absolute',
    top: '-958px',
    left: '-620px',
    width: '274px',
    height: '406px',
    backgroundColor: '#023f81',
  },
};

const ViewCrowdLevelBackground = (props) => {
  return (
    <div style={styles.Card}>
      {props.children}
    </div>
  );
};

export default ViewCrowdLevelBackground;