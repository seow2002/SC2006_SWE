import React from 'react';

const styles = {
  Icon: {
    position: 'absolute',
    color: '#ffffff',
    fill: '#ffffff',
    fontSize: '14px',
    top: '4px',
    left: '1px',
    width: '14px',
    height: '22px',
  },
};

const IconComponent = () => (
  <svg style={styles.Icon}  viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none">
    </path>
    <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z">
    </path>
  </svg>
);

const defaultProps = {
  IconComponent,
};

const WhiteDotIcon3 = (props) => {
  return (
    props.IconComponent 
      ? <props.IconComponent style={styles.Icon} /> 
      : <defaultProps.IconComponent />
  );
};

export default WhiteDotIcon3;