import React from 'react';
import { useContext } from 'react';
import PointContext from '../../PointContext';

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '32px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 500,
    lineHeight: '38px',
    textAlign: 'center',
  },
};

const Text = () => {
  const { points } = useContext(PointContext); //Use Points from PointContext

  return (
    <div style={styles.Text}>
      {points} {/* Display points directly */}
    </div>
  );
};

export default Text;