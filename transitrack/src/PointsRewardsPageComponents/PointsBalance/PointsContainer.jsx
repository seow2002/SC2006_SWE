import React from 'react';
import PointsIcon from './PointsIcon';
import PointsText from './PointsText'
import PointsNo from './PointsNo';

const styles = {
  Card: {
    top: '206px',
    left: '86px',
    width: '578px',
    height: '178px',
    display: 'flex',
    backgroundColor: '#023f81',
    marginLeft: '30px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Add shadow
    alignItems: 'center',
    borderRadius: '20px',
    //justifyContent: 'center',
  },
  Column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '90px',
  },
  ItemContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
};

const Card = (props) => {
  return (
    <div style={styles.Card}>
      <div style={styles.ItemContainer}>
      <PointsIcon/>
      </div>
      <div style={styles.Column}>
        <PointsText/>
        <PointsNo/>
      </div>
      {props.children}
    </div>
  );
};

export default Card;