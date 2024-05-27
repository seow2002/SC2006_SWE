import React from 'react';

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '12px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 500,
    lineHeight: '16px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    marginTop:'30px',
    left: '525px',
  },
};

const defaultProps = {
  text: 'Email',
};

const SignUpEmailHeader = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default SignUpEmailHeader;