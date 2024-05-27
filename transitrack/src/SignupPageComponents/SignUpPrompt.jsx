import React from 'react';

const styles = {
  Text: {
    color: '#ffffff',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Black shadow makes the text more legible
    fontSize: '14px',
    fontFamily: 'Source Sans Pro',
    lineHeight: '18px',
    textAlign: 'center',
    marginTop: '20px'
  },
};

const defaultProps = {
  text: 'Enter your details to continue',
};

const SignUpPrompt = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default SignUpPrompt;