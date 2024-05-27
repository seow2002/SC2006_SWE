import React from 'react';

const styles = {
  HorizontalDivider: {
    top: '666px',
    left: '84px',
    width: '1271px',
    height: '8px',
    backgroundColor: '#c2c2c2',
    borderRadius: '2px',
  },
};

const HorizontalDivider = (props) => {
  return (
    <div style={styles.HorizontalDivider} />
  );
};

export default HorizontalDivider;