import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgetPasswordText = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    container: {
      textAlign: 'center',
      marginTop: '10px',
      color: '#ffffff', // Set text color to white for the entire container
      
    },
    text: {
      cursor: 'pointer',
      fontSize: '15px',
      fontFamily: 'Source Sans Pro',
      lineHeight: '22px',
      borderRadius: '5px',
    },
    link: {
      textDecoration: isHovered ? 'underline' : 'none', // Underline on hover
      color: 'white', // Inherit the color from the container
      transform: isHovered ? 'scale(1.05)' : 'none', // Slight scale on hover
    },
  };

  return (
    <div 
      style={styles.container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to="/forgetpw" style={{ ...styles.text, ...styles.link }}>
        Forgot your password?
      </Link>
    </div>
  );
};

export default ForgetPasswordText;
