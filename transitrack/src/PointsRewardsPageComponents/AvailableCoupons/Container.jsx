import React from 'react';
import Icon from './Icon';
import TextHeader from './TextHeader';
import LineItem from './LineItem';


const styles = {
  Card: {
    top: '206px',
    left: '724px',
    width: '578px',
    height: '215px',
    backgroundColor: '#023f81',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Add shadow
    //justifyContent: 'space-between',
    marginRight: '40px',
    borderRadius: '20px',
  },
  Heading: {
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    marginTop: '20px',
  }
};

const Card = ({ rewards }) => {
  return (
    <div style={styles.Card}>
      <div style={styles.Heading}>
        <TextHeader />
        <Icon />
      </div>
      {rewards.map((reward, index) => (
        <LineItem key={index} content={reward.content} />
      ))}
    </div>
  );
};

export default Card;