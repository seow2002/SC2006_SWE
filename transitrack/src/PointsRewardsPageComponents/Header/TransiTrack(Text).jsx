import React from 'react';

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '40px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 700,
    lineHeight: '52px',
    marginLeft: '20px',
  },
};

const defaultProps = {
  text: 'TransiTrack',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;