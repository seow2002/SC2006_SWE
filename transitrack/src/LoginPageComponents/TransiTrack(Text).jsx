import React from 'react';

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '64px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 500,
    lineHeight: '72px',
    textAlign: 'center',
  },
};

const defaultProps = {
  text: 'TransitTrack',
};

const TransiTrackText = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default TransiTrackText;