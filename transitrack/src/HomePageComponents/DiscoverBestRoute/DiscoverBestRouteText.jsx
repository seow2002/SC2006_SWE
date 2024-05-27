import React from 'react';

const styles = {
  Text: {
    position: 'absolute',
    color: '#ffffff',
    fontSize: '24px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 700,
    lineHeight: '31px',
    textAlign: 'center',
    top: '300px',
    left: '33px'
  },
};

const defaultProps = {
  text: 'Discover Best Routes',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;