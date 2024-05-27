import React from 'react';

const styles = {
  Button: {
    cursor: 'pointer',
    position: 'absolute',
    top: '650px',
    left: '180px',
    width: '295px',
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
    lineHeight: '21px',
    outline: 'none',
    marginTop: '15px',
  },
};

const defaultProps = {
  label: 'Log In',
  onClick: () => {}, 
};

const LoginButton = (props) => {
  const { label = defaultProps.label, onClick = defaultProps.onClick } = props;

  return (
    <button style={styles.Button} onClick={onClick}>
      {label}
    </button>
  );
};

export default LoginButton;