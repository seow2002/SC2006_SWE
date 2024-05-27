import React from 'react';

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '24px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 500,
    lineHeight: '31px',
    textAlign: 'center',
    marginLeft: '15px',
  },
};

const defaultProps = {
  text: '$2 EZLink Wallet Top-up',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;