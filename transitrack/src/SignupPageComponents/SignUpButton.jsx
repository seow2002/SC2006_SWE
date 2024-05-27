import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  Button: {
    cursor: 'pointer',
    top: '719px',
    left: '100px',
    width: '468px',
    height: '48px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '24px',
    backgroundColor: '#e30f03',
    color: '#ffffff',
    fontSize: '16px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 700,
    lineHeight: '22px',
    outline: 'none',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    marginTop:'-50px',
  },
};

const defaultProps = {
  label: 'Sign up',
};

const SignUpButton = (props) => {

  return (
    <button style={styles.Button}>
      {props.label ?? defaultProps.label}
    </button>
  );
};

export default SignUpButton;