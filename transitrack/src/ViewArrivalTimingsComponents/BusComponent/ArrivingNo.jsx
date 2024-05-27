import React from 'react';

const styles = {
  Text: {
    color: '#4cd964',
    fontSize: '40px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 400,
    lineHeight: '52px',
  },
};

const defaultProps = {
  text: '3',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;