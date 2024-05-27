import React from 'react';
import SignUpFullNameIcon from './SignUpFullNameIcon';

const containerStyles = {
    display: 'flex',
    justifyContent: 'center', // Horizontally center
    alignItems: 'center', // Vertically center
    marginTop:'50px',
    position: 'relative',
  };

const styles = {
  Input: {
    top: '150px',
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
  },
};

const defaultProps = {
  text: 'Enter your full name',

};
const SignUpFullNameInputField = (props) => {
  return (
    <div style={containerStyles}> {/* Use the containerStyles for centering */}
      <input style={styles.Input} placeholder={props.text ?? defaultProps.text} />
      <SignUpFullNameIcon style={{ /* ... icon styles if needed ... */ }} />
    </div>
  );
};

export default SignUpFullNameInputField;