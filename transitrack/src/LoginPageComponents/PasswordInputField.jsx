import React from 'react';

const styles = {
  Input: {
    top: '624px',
    left: '526px',
    width: '374px',
    height: '44px',
    padding: '0px 8px',
    border: '0',
    borderBottom: '1px solid #bebebe',
    boxSizing: 'border-box',
    backgroundColor: '#363636',
    color: '#bebebe',
    fontSize: '22px',
    fontFamily: 'Source Sans Pro',
    lineHeight: '29px',
    outline: 'none',
    marginTop: '20px',
  },
};

const defaultProps = {
  text: 'Password',
};

const PasswordInputField = ({ value, onChange, text = defaultProps.text }) => {
  return (
    <input
      type="password" // Ensures the input is treated as a password field, hiding the text
      style={styles.Input}
      placeholder={text}
      value={value}
      onChange={onChange}
    />
  );
};

export default PasswordInputField;