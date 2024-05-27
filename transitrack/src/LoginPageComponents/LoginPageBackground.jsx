import React from 'react';

const styles = {
    ImageContainer: {
      position: 'fixed', // Add this to make sure the image is fixed
      zIndex: 5,
      top: 0,
      left: 0,
      width: '100vw', // Use viewport width
      height: '100vh', // Use viewport height
      borderRadius: '0px', // Adjust as needed
      backgroundImage: 'url(./image.jpeg)',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },
  };
  

const defaultProps = {
  image: 'https://images.unsplash.com/photo-1598698222618-3602b9da496d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwzfHxzaW5nYXBvcmUlMjBidXN8ZW58MXx8fHwxNzA3ODI2MDYxfDA&ixlib=rb-4.0.3&q=80&w=1080',
}

const LoginPageBackground = (props) => {
  return (
    <div style={{
      ...styles.ImageContainer,
      backgroundImage: `url(${props.image ?? defaultProps.image})`,
    }} />
  );
};

export default LoginPageBackground;