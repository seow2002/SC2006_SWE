import React, { useState } from 'react';

const styles = {
  Button: {
    cursor: 'pointer',
    top: '735px',
    left: '541px',
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
    marginTop:'41px'
  },
};

const defaultProps = {
  label: 'Submit',
};

const ForgetSubmitButton = (props) => {
  return (
    <button style={styles.Button} onClick={props.onClick}>
      {props.label ?? defaultProps.label}
    </button>
  );
};

export default ForgetSubmitButton;