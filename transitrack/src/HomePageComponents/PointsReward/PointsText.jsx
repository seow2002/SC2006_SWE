import React from 'react';

const styles = {
  Text: {
    position: 'absolute',
    color: '#ffffff',
    fontSize: '24px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 700,
    lineHeight: '31px',
    top:'290px',
    left:'113px',
  },
};

const defaultProps = {
  text: 'Points',
};

const PointsText = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default PointsText;