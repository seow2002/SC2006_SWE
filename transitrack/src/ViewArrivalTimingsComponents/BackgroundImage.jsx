import React from 'react';

const styles = {
  ImageContainer: {
    position: 'fixed',
    top: '0px',
    left: '0px',
    width: '100vw',
    height: '100vh',
    borderRadius: '0px',
    opacity: 0.73,
    backgroundImage: 'url(./image.jpeg)',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    zIndex: -1,
  },
};

const defaultProps = {
  image: 'https://images.unsplash.com/photo-1531270279937-aca3e712ad01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwxM3x8dHJhbnNwb3J0fGVufDF8fHx8MTcxMDc2MzAxM3ww&ixlib=rb-4.0.3&q=80&w=1080',
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