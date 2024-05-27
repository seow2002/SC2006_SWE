import React from 'react';

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '32px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 500,
    lineHeight: '38px',
    textAlign: 'center',
  },
};

const defaultProps = {
  text: 'Points Balance',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;