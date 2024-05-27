import React from 'react';

const styles = {
  Icon: {
    position:'absolute',
    color: '#ffffff',
    fill: '#ffffff',
    fontSize: '174px',
    top: '80px',
    left: '55px',
    width: '174px',
    height: '158px',
  },
};

const IconComponent = () => (
  <svg style={styles.Icon}  viewBox="0 0 24 24">
    <path fill="none" d="M0 0h24v24H0z">
    </path>
    <path d="M19.71 9.71 22 12V6h-6l2.29 2.29-4.17 4.17a.996.996 0 0 1-1.41 0l-1.17-1.17a3 3 0 0 0-4.24 0L2 16.59 3.41 18l5.29-5.29a.996.996 0 0 1 1.41 0l1.17 1.17a3 3 0 0 0 4.24 0l4.19-4.17z">
    </path>
  </svg>
);

const defaultProps = {
  IconComponent,
};

const DiscoverBestRouteIcon1 = (props) => {
  return (
    props.IconComponent 
      ? <props.IconComponent style={styles.Icon} /> 
      : <defaultProps.IconComponent />
  );
};

export default DiscoverBestRouteIcon1;