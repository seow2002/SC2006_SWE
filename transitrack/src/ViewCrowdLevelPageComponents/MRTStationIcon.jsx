import React from 'react';

const styles = {
  Icon: {
    color: '#ffffff',
    fill: '#ffffff',
    fontSize: '123px',
    position: 'absolute',
    top: '120px',
    left: '170px',
    width: '123px',
    height: '74px',
  },
};

const IconComponent = () => (
  <svg style={styles.Icon}  viewBox="0 0 24 24">
    <path d="M0 0v24h24V0H0zm22 22H2V8.86C2 6.05 3.53 3.84 6.2 2.8 8 2.09 10.14 2 12 2c1.86 0 4 .09 5.8.8C20.47 3.84 22 6.05 22 8.86V22z" fill="none">
    </path>
    <path d="M15.5 15a1 1 0 1 0 0 2 1 1 0 1 0 0-2zM8.5 15a1 1 0 1 0 0 2 1 1 0 1 0 0-2z">
    </path>
    <path d="M7.01 9h10v5h-10zM17.8 2.8C16 2.09 13.86 2 12 2c-1.86 0-4 .09-5.8.8C3.53 3.84 2 6.05 2 8.86V22h20V8.86c0-2.81-1.53-5.02-4.2-6.06zm.2 13.08c0 1.45-1.18 2.62-2.63 2.62l1.13 1.12V20H15l-1.5-1.5h-2.83L9.17 20H7.5v-.38l1.12-1.12C7.18 18.5 6 17.32 6 15.88V9c0-2.63 3-3 6-3 3.32 0 6 .38 6 3v6.88z">
    </path>
  </svg>
);

const defaultProps = {
  IconComponent,
};

const MRTStationIcon = (props) => {
  return (
    props.IconComponent 
      ? <props.IconComponent style={styles.Icon} /> 
      : <defaultProps.IconComponent />
  );
};

export default MRTStationIcon;