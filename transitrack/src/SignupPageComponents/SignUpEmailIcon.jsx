import React from 'react';

const styles = {
  Icon: {
    color: '#ffffff',
    fill: '#ffffff',
    fontSize: '24px',
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
  <svg style={styles.Icon}  viewBox="0 0 512 512">
    <path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z">
    </path>
  </svg>
);

const defaultProps = {
  IconComponent,
};

// const SignUpEmailIcon = (props) => {
//   return (
//     props.IconComponent 
//       ? <props.IconComponent style={styles.Icon} /> 
//       : <defaultProps.IconComponent />
//   );
// };

const SignUpEmailIcon = ({ style }) => {
  return <IconComponent style={style} />;
};

export default SignUpEmailIcon;