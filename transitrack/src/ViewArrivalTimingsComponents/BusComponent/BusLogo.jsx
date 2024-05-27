import React from 'react';

const styles = {
  ImageContainer: {
    top: '376px',
    left: '94px',
    width: '78px',
    height: '97px',
    borderRadius: '24px',
    backgroundImage: 'url(./image.jpeg)',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
};

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/c6786e05-940d-4e7e-a5e9-dd2dcb66b834.jpeg',
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