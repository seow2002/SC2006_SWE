import React from 'react';
import { Link } from 'react-router-dom'

const styles = {
  ImageContainer: {
    top: '1px',
    left: '0px',
    width: '93px',
    height: '100px',
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
    <Link to="/home" style={{ textDecoration: 'none' }}> 
      <div style={{
        ...styles.ImageContainer,
        backgroundImage: `url(${props.image ?? defaultProps.image})`,
      }} />
    </Link>
  );
};

export default Image;