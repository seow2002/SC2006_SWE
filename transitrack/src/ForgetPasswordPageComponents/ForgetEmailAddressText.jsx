import React from 'react';

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '20px',
    fontFamily: 'Tahoma',
    lineHeight: '30px',
    textAlign: 'center',
    marginTop: "100px"
  },
};

const defaultProps = {
  text: 'Enter your email address to reset your password',
};

const ForgetEmailAddressText = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default ForgetEmailAddressText;