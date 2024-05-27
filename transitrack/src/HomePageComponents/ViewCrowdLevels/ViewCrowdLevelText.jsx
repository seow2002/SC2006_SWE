import React from 'react';

const styles = {
  Text: {
    position:'absolute',
    color: '#ffffff',
    fontSize: '24px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 700,
    lineHeight: '31px',
    top:'305px',
    left:'41px',
  },
};

const defaultProps = {
  text: 'View Crowd Levels',
};

const ViewCrowdLevelText = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default ViewCrowdLevelText;