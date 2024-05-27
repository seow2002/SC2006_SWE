import React from 'react';
import SignUpPasswordIcon from './SignUpPasswordIcon';

const containerStyles = {
    display: 'flex',
    justifyContent: 'center', // Horizontally center
    alignItems: 'center', // Vertically center
    marginTop: '44px',
    position: 'relative'
};

const styles = {
  Input: {
    width: '468px',
    height: '48px',
    padding: '0px 8px',
    border: '0',
    borderBottom: '1px solid #bebebe',
    boxSizing: 'border-box',
    backgroundColor: '#363636',
    color: '#bebebe',
    fontSize: '20px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 500,
    lineHeight: '18px',
    outline: 'none',
  },
};

const defaultProps = {
  text: 'Create your password',
};

const SignUpPasswordInputField = ({ value, onChange, text = defaultProps.text }) => {
  return (
    <div style={containerStyles}>
      <input
        type="password" // Ensure the input hides the password
        style={styles.Input}
        placeholder={text}
        value={value} // Controlled component value
        onChange={onChange} // Method to update parent state
      />
      <SignUpPasswordIcon />
    </div>
  );
};

export default SignUpPasswordInputField;