import React from 'react';
import PointsIcon from './PointsIcon';
import RewardsIcon from './RewardsIcon';
import PointsIconHeader from './PointsRewardsHeader';


const styles = {
    PointsRewardContainer: {
      zIndex: 10, // This ensures it is above the background
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center', // Vertically center the items
      justifyContent: 'space-between',
      marginLeft: 'auto',
      marginRight: '30px',
    },
  };
  
  const PointsRewardContainer = (props) => {
    return (
      <div style={styles.PointsRewardContainer}>
        <PointsIcon/>
        <RewardsIcon/>
        <PointsIconHeader/>
        {props.children}
      </div>
    );
  };
  
  export default PointsRewardContainer;