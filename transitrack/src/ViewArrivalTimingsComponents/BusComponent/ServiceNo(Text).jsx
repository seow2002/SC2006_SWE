import React from 'react';

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '40px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 400,
    lineHeight: '52px',
  },
};

const defaultProps = {
  text: '179',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;