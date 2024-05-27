import React from 'react';

const styles = {
  Text: {
    position: 'absolute',
    color: '#ffffff',
    fontSize: '24px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 700,
    lineHeight: '31px',
    top:'330px',
    left:'65px',
  },
};

const defaultProps = {
  text: 'Claim Rewards',
};

const ClaimRewardsText = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default ClaimRewardsText;