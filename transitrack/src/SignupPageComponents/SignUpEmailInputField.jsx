import React from 'react';
import SignUpEmailIcon from './SignUpEmailIcon';

const containerStyles = {
    display: 'flex',
    justifyContent: 'center', // Horizontally center
    alignItems: 'center', // Vertically center
    marginTop:'44px',
    position: 'relative',
  };

const styles = {
  Input: {
    top: '327px',
    left: '486px',
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

// Adjusting defaultProps to include more relevant props for functionality
const defaultProps = {
  text: 'Enter your email',
};

const SignUpEmailInputField = ({ value, onChange, text = defaultProps.text }) => {
  return (
      <div style={containerStyles}>
          <input
              type="email"
              style={styles.Input}
              placeholder={text}
              value={value} // Controlled component
              onChange={onChange} // Handle change
          />
          <SignUpEmailIcon />
      </div>
  );
};

SignUpEmailInputField.defaultProps = defaultProps;

export default SignUpEmailInputField;