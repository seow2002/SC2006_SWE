import React from 'react';

const styles = {
  ImageContainer: {
    top: '0px',
    left: '0px',
    width: '100vw',
    height: '100vh',
    borderRadius: '8px',
    opacity: 0.4,
    backgroundImage: 'url(./image.jpeg)',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    zIndex: -1,
    position: 'absolute',
  },
};

const defaultProps = {
  image: 'https://images.unsplash.com/photo-1667895613131-8e895abf7c6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwyN3x8U2luZ2Fwb3JlJTIwdHJhbnNwb3J0YXRpb258ZW58MXx8fHwxNzEwNzYzMTIxfDA&ixlib=rb-4.0.3&q=80&w=1080',
}

const Image = (props) => {
  return (
    <div style={{
      ...styles.ImageContainer,
      backgroundImage: `url(${props.image ?? defaultProps.image})`,
    }} />
  );
};

export default Image;