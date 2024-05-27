import React from 'react';

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '24px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 600,
    lineHeight: '30px',
    textAlign: 'right',
  },
};

const defaultProps = {
  text: 'Points/Claim Rewards',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;