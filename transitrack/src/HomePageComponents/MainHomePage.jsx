import React from 'react';
import HPHeader from './HomePageHeader/HPHeaderBar';
import HPBackground from './HPBackground';
import DiscoverBestRouteContainer from './DiscoverBestRoute/DiscoverBestRouteContainer';
import ViewBusArrivalContainer from './ViewArrivalTimings/ViewBusArrivalContainer';
import ViewCrowdLevelContainer from './ViewCrowdLevels/ViewCrowdLevelContainer';
import PointsRewardsContainer from './PointsReward/PointsRewardsContainer';

const styles = {
  MainHomePage: {
    position: 'fixed', 
    //top: 0,
    //left: 0,
    width: '100vw',
    height: '100vh',
    //backgroundColor: '#282828',
   //backgroundSize: 'cover',
    borderRadius: '0px',
    //backgroundRepeat: 'no-repeat',
    /*display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', 
    justifyContent: 'flex-start',*/
   overflow: 'scroll'
  },
};

const MainHomePage = (props) => {
  return (
    <div style={styles.MainHomePage}>
      <HPHeader />
      <DiscoverBestRouteContainer />
      <ViewBusArrivalContainer />
      <ViewCrowdLevelContainer />
      <PointsRewardsContainer />
      <HPBackground />
    </div>
  );
};

export default MainHomePage;
