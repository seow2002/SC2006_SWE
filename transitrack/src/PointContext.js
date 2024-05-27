import React, { createContext, useState, useEffect } from 'react';
import { auth, db } from './firebase'; // Ensure the path is correct for your setup
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

const PointContext = createContext();

export const PointProvider = ({ children }) => {
  const [points, setPoints] = useState(0);
  const [redemptionHistory, setRedemptionHistory] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Fetch points
        const userRef = doc(db, 'users', user.uid);
        const fetchPoints = async () => {
          const docSnap = await getDoc(userRef);
          if (docSnap.exists()) {
            setPoints(docSnap.data().points);
            // Fetch redemption history
            const fetchedHistory = docSnap.data().redemptionHistory || [];
            setRedemptionHistory(fetchedHistory.slice(-3)); // Get only the last 3 entries
          } else {
            // Initialize points and redemption history if they don't exist
            setPoints(0);
            setRedemptionHistory([]);
            setDoc(userRef, { points: 0, redemptionHistory: [] }, { merge: true });
          }
        };
        fetchPoints();
      } else {
        // Reset points and redemption history when no user is logged in
        setPoints(0);
        setRedemptionHistory([]);
      }
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      const userRef = doc(db, 'users', user.uid);
      const updateFirestore = async () => {
        try {
          await setDoc(userRef, {
            points: points,
            redemptionHistory: redemptionHistory
          }, { merge: true });
        } catch (error) {
          console.error("Error updating Firestore:", error);
        }
      };

      // Run the update function if either points or redemption history changes
      updateFirestore();
    }
  }, [points, redemptionHistory]); // Re-run when points or redemption history changes

  return (
    <PointContext.Provider value={{ points, setPoints, redemptionHistory, setRedemptionHistory }}>
      {children}
    </PointContext.Provider>
  );
};

export default PointContext;
