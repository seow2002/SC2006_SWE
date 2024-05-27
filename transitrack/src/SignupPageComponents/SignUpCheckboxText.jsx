import React from 'react';

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '18px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 500,
    lineHeight: '18px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    marginTop: '410px',
    left: '190px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Black shadow makes the text more legible
  },
};

const defaultProps = {
  text: 'I agree with Terms and Privacy Policy.',
};

const SignUpCheckboxText = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default SignUpCheckboxText;