import React from 'react';
import BusLogo from './BusLogo';
import ServiceHeader from './ServiceHeader(Text)';
import ServiceNoText from './ServiceNo(Text)';
import ArrivingHeader from './ArrivingHeader';
import ArrivingNo from './ArrivingNo';
import NextBusHeader from './NextBusHeader';
import NextBusNo from './NextBusNo';


const styles = {
  Card: {
    top: '364px',
    left: '77px',
    width: '545px',
    height: '122px',
    backgroundColor: '#023f81',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    display: 'flex',
    alignItems: 'center',
    marginLeft: '20px',
    marginTop: '20px',
    borderRadius: '10px', //for making rounded corners
  },
  Attributes: {
    //padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
};

const Card = (props) => {
  return (
    <div style={styles.Card}>
        <BusLogo/>
        <div style = {styles.Attributes}>
            <ServiceHeader/>
            <ServiceNoText/>
        </div>
        <div style = {styles.Attributes}>
            <ArrivingHeader/>
            <ArrivingNo/>
        </div>
        <div style = {styles.Attributes}>
            <NextBusHeader/>
            <NextBusNo/>
        </div>
      {props.children}
    </div>
  );
};

export default Card;