import React from 'react';

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '18px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 400,
    lineHeight: '23px',
    textAlign: 'center',
  },
};

const defaultProps = {
  text: 'Stand a chance to win $10 EZLink Wallet Top-up!',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;