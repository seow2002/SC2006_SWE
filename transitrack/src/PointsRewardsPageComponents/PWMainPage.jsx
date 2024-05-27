import React, { useState, useContext, useEffect } from 'react';
import PointContext from '../PointContext';
import Header from './Header/Header';
import PWBackground from './PointsRewardsBackground';
import PointsBalance from './PointsBalance/PointsContainer';
import TitleContainer from './PointsRewards/PointsRewardContainer';
import AvailCoupons from './AvailableCoupons/Container';
import RedeemPtsFor from './RedeemPointsHeader/Container';
import Reward1 from './Reward1/Container';
import Reward2 from './Reward2/Container';
import Reward3 from './Reward3/Container';
import PointsActivity from './PointsActivity/Container';
import { getDoc, updateDoc, doc } from 'firebase/firestore';
import { auth, db } from '../firebase';

const styles = {
    PWMainPage: {
      position: 'fixed', 
      width: '100vw',
      height: '100vh',
      borderRadius: '0px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start', 
      justifyContent: 'flex-start',
    },
    Level1: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '25px',
      padding: '0 20px',
      boxSizing: 'border-box',     
    },
    Level2: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '25px',
      padding: '0 20px',
      boxSizing: 'border-box',      
    }
};

const PWMainPage = () => {
    const { points, setPoints, redemptionHistory, setRedemptionHistory } = useContext(PointContext);

    // Fetch points and redemption history when the component mounts
    useEffect(() => {
      const fetchPointsAndHistory = async () => {
        const user = auth.currentUser;
        if (user) {
          const userRef = doc(db, 'users', user.uid);
          const userDoc = await getDoc(userRef);
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setPoints(userData.points);
            setRedemptionHistory(userData.redemptionHistory || []);
          } else {
            console.log("No such document!");
          }
        }
      };
  
      fetchPointsAndHistory();
    }, [setPoints, setRedemptionHistory]);

    // Handle redemption of points for rewards
    const handleRedemption = async (rewardName, pointsCost) => {
      // Update Firestore and local state
      const addRewardToHistory = async (newEntry) => {
        const user = auth.currentUser;
        if (user) {
          const userRef = doc(db, 'users', user.uid);
          await updateDoc(userRef, {
            redemptionHistory: [...redemptionHistory, newEntry].slice(0, 3) // Keep only the latest 3 entries
          });
        }
        setRedemptionHistory(prevHistory => [newEntry, ...prevHistory].slice(0, 3));
      };

      if (points >= pointsCost) {
        const newPointsTotal = points - pointsCost;
        setPoints(newPointsTotal); // Deduct points

        const newEntry = {
          date: new Date().toLocaleDateString('en-GB'),
          content: rewardName,
          points: pointsCost,
        };

        addRewardToHistory(newEntry); // Update Firestore and local state
      } else {
        console.error("Not enough points");
      }
    };

    
  
    return (
      <div style={styles.PWMainPage}>
        <Header />
        <PWBackground />
        <TitleContainer />
        <div style={styles.Level1}>
          <PointsBalance points={points} />
          <AvailCoupons rewards={redemptionHistory} />
        </div>
        <RedeemPtsFor />
        <div style={styles.Level2}>
          <Reward1 onRedeem={() => handleRedemption('$2 EZLink Wallet Top-up', 50)} />
          <Reward2 onRedeem={() => handleRedemption('$4 EZLink Wallet Top-up', 80)} />
          <Reward3 onRedeem={() => handleRedemption('Monthly Lucky Draw', 100)} />
        </div>
        <PointsActivity history={redemptionHistory} />
        {/* props.children should be passed here if you are rendering children */}
      </div>
    );
  };
  
  export default PWMainPage;