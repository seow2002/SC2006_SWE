import React from 'react';
import SignUpUsernameIcon from './SignUpUsernameIcon';

const containerStyles = {
    display: 'flex',
    justifyContent: 'center', // Horizontally center
    alignItems: 'center', // Vertically center
    marginTop:'44px',
    position: 'relative',
  };

const styles = {
  Input: {
    top: '419px',
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

const defaultProps = {
  text: 'Create your username',
};

const SignUpUsernameInputField = (props) => {
  return (
    <div style={containerStyles}> {/* Use the containerStyles for centering */}
    <input style={styles.Input} placeholder={props.text ?? defaultProps.text} />
    <SignUpUsernameIcon style={{ /* ... icon styles if needed ... */ }} />
    </div>
  );
};

export default SignUpUsernameInputField;