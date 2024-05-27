import React from 'react';

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '16px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 600,
    lineHeight: '21px',
    textAlign: 'center',
  },
};

const defaultProps = {
  text: 'Some Crowds',
};

const SomeCrowdsText = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default SomeCrowdsText;