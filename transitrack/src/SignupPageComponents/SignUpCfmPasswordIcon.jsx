import React from 'react';

const styles = {
  Icon: {
    color: '#ffffff',
    fill: '#ffffff',
    fontSize: '16px',
    width: '16px',
    height: '16px',
    position: 'absolute', // Make sure the icon is positioned absolutely
    top: '50%', // Center vertically
    right: '525', // Align to the right edge of the input field
    transform: 'translateY(-50%)', // Adjust for perfect vertical centering
    marginRight: '-45px',
  },
};


const IconComponent = () => (
  <svg style={styles.Icon}  viewBox="0 0 448 512">
    <path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z">
    </path>
  </svg>
);

const defaultProps = {
  IconComponent,
};

const SignUpCfmPasswordIcon = (props) => {
  return (
    props.IconComponent 
      ? <props.IconComponent style={styles.Icon} /> 
      : <defaultProps.IconComponent />
  );
};

export default SignUpCfmPasswordIcon;