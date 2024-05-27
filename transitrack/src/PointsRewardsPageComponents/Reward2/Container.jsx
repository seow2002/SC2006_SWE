import React from 'react';
import Icon from './Icon';
import Title from './Title';
import Points from './Points';
import Button from './Button';

const styles = {
  Card: {
    top: '436px',
    left: '77px',
    width: '375px',
    height: '152px',
    backgroundColor: '#023f81',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    //marginTop: '5px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Add shadow 
    borderRadius: '20px',
  },
  RowContainer: {
    display: 'flex',
    alignItems: 'center',
  }
};

const Card = ({onRedeem, pointCost}) => {
  return (
  <div style={styles.Card}>
      <div style={styles.RowContainer}>
          <Icon/>
          <Title/>
      </div>
      <Points/>
      <Button onRedeem={() => onRedeem('$4 EZLink Wallet Top-Up', pointCost)}/>
  </div>
  );
};

export default Card;