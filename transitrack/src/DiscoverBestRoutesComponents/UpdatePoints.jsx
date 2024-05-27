import React, { useEffect } from 'react';
import { db, auth } from '../firebase'; // Assuming this is your Firebase setup file
import { doc, getDoc, updateDoc } from 'firebase/firestore';

const UpdatePoints = ({ startPoint, endPoint, onPointsUpdated }) => {
  // Function to calculate distance between two lat/lng points
  const calculateDistance = (start, end) => {
    const R = 6371; // Radius of the Earth in km
    const dLat = radians(end.lat - start.lat);
    const dLon = radians(end.lng - start.lng);
    const a = 
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(radians(start.lat)) * Math.cos(radians(end.lat)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in km
    return distance;
  };

  // Helper function to convert degrees to radians
  const radians = (deg) => deg * (Math.PI / 180);

  const updatePoints = async () => {
    const user = auth.currentUser;
    if (!user) {
      console.error('No user logged in');
      return;
    }

    const distanceTravelled = calculateDistance(startPoint, endPoint);
    const pointsAwarded = Math.round(distanceTravelled * 10);

    const userDocRef = doc(db, 'users', user.uid);

    try {
      const docSnap = await getDoc(userDocRef);
      let currentPoints = 0;
      if (docSnap.exists()) {
        currentPoints = docSnap.data().points || 0;
        console.log(`Current points from Firestore: ${currentPoints}`); // Log the current points pulled from Firestore
      } else {
        console.log('No such document!');
      }

      console.log(`Points to be added: ${pointsAwarded}`); // Log the points to be added

      const newPointsTotal = currentPoints + pointsAwarded;
      console.log(`New total points before update: ${newPointsTotal}`); // Log the new total points before the update

      await updateDoc(userDocRef, {
        points: newPointsTotal,
      });

      console.log(`User awarded ${pointsAwarded} points, new total after update: ${newPointsTotal}`);
      if (onPointsUpdated) {
        onPointsUpdated(pointsAwarded); // Notify the parent component (optional)
      }
    } catch (error) {
      console.error('Error updating points:', error);
    }
  };

  useEffect(() => {
    updatePoints();
  }, [startPoint, endPoint]); // Dependency array ensures this runs when startPoint or endPoint change

  return null; // This component does not render anything
};

export default UpdatePoints;