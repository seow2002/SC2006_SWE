import React from 'react';

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '24px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 400,
    lineHeight: '28px',
  },
};

const defaultProps = {
  text: 'Service',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;