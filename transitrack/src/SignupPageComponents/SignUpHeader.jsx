import React from 'react';

const styles = {
  Text: {
    color: '#ffffff',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Black shadow makes the text more legible
    fontSize: '48px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 700,
    lineHeight: '56px',
    textAlign: 'center',
    marginTop: '15px'
  },
};

const defaultProps = {
  text: 'Sign up',
};

const SignUpHeader = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default SignUpHeader;