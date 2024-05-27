import React from 'react';

const styles = {
  ImageContainer: {
    position: 'fixed',
    top: '0px',
    left: '0px',
    width: '100vw',
    height: '100vh',
    borderRadius: '0px',
    backgroundImage: 'url(./image.jpeg)',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    zIndex: -1,
  },
};

const defaultProps = {
  image: 'https://images.unsplash.com/photo-1647508933127-6d349291e2ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwzMnx8U2luZ2Fwb3JlJTIwdHJhbnNwb3J0YXRpb258ZW58MXx8fHwxNzEwNzYzMTMzfDA&ixlib=rb-4.0.3&q=80&w=1080',
}

const DBRBackground = (props) => {
  return (
    <div style={{
      ...styles.ImageContainer,
      backgroundImage: `url(${props.image ?? defaultProps.image})`,
    }} />
  );
};

export default DBRBackground;