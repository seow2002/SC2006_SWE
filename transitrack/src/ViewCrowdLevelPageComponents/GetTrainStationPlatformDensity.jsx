// GetTrainStationPlatformDensity.jsx
import React, { useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase.js';

const GetTrainStationPlatformDensity = ({ onDensitiesFetched }) => {
  useEffect(() => {
    const fetchAndMatchStationDensities = async () => {
      try {
        // Fetch detailed info from 'trainStations' collection
        const stationsSnapshot = await getDocs(collection(db, 'NearbyTrainStations'));
        // This time, we're including both the code and the full name
        const stationDetails = stationsSnapshot.docs.map(doc => ({
          code: doc.data().name.substring(0, 4), // First 4 characters for the station code
          fullName: doc.data().name, // Full station name
        }));

        // Map over stationDetails to fetch densities for each station
        const fetchDensitiesPromises = stationDetails.map(async ({ code, fullName }) => {
          const densityQuery = query(collection(db, 'TrainStationPlatformDensity'), where('Station', '==', code));
          const querySnapshot = await getDocs(densityQuery);
          if (!querySnapshot.empty) {
            const { CrowdLevel } = querySnapshot.docs[0].data();
            return { stationCode: code, stationName: fullName, CrowdLevel }; // Including the full station name
          }
          return { stationCode: code, stationName: fullName, CrowdLevel: 'Unknown' }; // Including the full station name
        });

        const densities = await Promise.all(fetchDensitiesPromises);
        onDensitiesFetched(densities);
      } catch (error) {
        console.error("Error fetching platform densities:", error);
      }
    };

    fetchAndMatchStationDensities();
  }, [onDensitiesFetched]);

  return null; // This component does not render anything itself
};

export default GetTrainStationPlatformDensity;
