import React from 'react';

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '30px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 500,
    lineHeight: '39px',
    //textAlign: 'center',
  },
};

const defaultProps = {
  text: 'Points Activity',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;