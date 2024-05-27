import React, {useContext} from 'react';

const styles = {
  Button: {
    cursor: 'pointer',
    top: '540px',
    left: '203px',
    width: '126px',
    height: '36px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '24px',
    backgroundColor: '#ffffff',
    color: '#161616',
    fontSize: '18px',
    fontFamily: 'Roboto',
    fontWeight: '500',
    lineHeight: '23px',
    outline: 'none',
    marginTop: '10px',
  },
};

const defaultProps = {
  label: 'REDEEM',
};

const Button = ({ onRedeem }) => {
  return (
    <button onClick={onRedeem} style={{ /* styles here */ }}>
      Redeem
    </button>
  );
};

export default Button;