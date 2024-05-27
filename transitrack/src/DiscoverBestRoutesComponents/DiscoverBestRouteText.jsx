import React from 'react';

const styles = {
  Text: {
    position: 'fixed',
    color: '#ffffff',
    fontSize: '24px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 600,
    lineHeight: '30px',
    textAlign: 'right',
    top: '125px',
    right: '15px',
  },
};

const defaultProps = {
  text: 'Discover the Best Routes',
};

const DiscoverBestRouteText = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default DiscoverBestRouteText;