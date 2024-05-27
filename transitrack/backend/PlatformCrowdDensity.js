import fetch from 'node-fetch';
import { db } from './firebaseadmin.js';

// Function to fetch crowd density data and upload to Firebase
const fetchCrowdDensityData = async (trainLine) => {
  const myHeaders = new Headers();
  myHeaders.append("AccountKey", "JPf+lIoDSIe6uPk+lHf2fA==");
  myHeaders.append("TrainLine", trainLine);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  try {
    const response = await fetch(`http://datamall2.mytransport.sg/ltaodataservice/PCDRealTime?TrainLine=${trainLine}`, requestOptions);
    const result = await response.json();

    // Check if the result contains the value array
    if (Array.isArray(result.value)) {
      const batch = db.batch();

      result.value.forEach(stationDensity => {
        // Adjust here to match your Firestore schema if necessary
        const docRef = db.collection('TrainStationPlatformDensity').doc(stationDensity.Station); // Use Station as the document ID
        batch.set(docRef, {
          Station: stationDensity.Station,
          StartTime: stationDensity.StartTime,
          EndTime: stationDensity.EndTime,
          CrowdLevel: stationDensity.CrowdLevel
        });
      });

      await batch.commit();
      console.log('Data uploaded to Firebase successfully.');
    } else {
      // Handle cases where result.value is not an array (likely an error)
      console.error('API Error:', result.value.status.message);
    }
  } catch (error) {
    console.error('Error fetching crowd density data:', error);
  }
};

export {fetchCrowdDensityData};
