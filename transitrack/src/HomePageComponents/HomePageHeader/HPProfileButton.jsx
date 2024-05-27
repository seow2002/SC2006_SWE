import React from 'react';

const styles = {
  Button: {
    cursor: 'pointer',
    top: '56px',
    left: '1230px',
    width: '130px',
    height: '48px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '24px',
    backgroundColor: '#e30f03',
    color: '#ffffff',
    fontSize: '20px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 500,
    lineHeight: '26px',
    outline: 'none',
    marginLeft: '10px',
  },
};

const defaultProps = {
  label: 'Profile',
};

const HPProfileButton = (props) => {
  return (
    <button style={styles.Button}>
      {props.label ?? defaultProps.label}
    </button>
  );
};

export default HPProfileButton;