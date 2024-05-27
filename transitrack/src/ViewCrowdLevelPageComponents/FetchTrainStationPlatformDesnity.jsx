import axios from 'axios';
import { db } from '../firebase.js'; 
import { collection, getDocs } from 'firebase/firestore';

const fetchPlatformDensities = async () => {
  try {
    // Fetch the nearby train station from Firestore
    const stationsSnapshot = await getDocs(collection(db, 'NearbyTrainStations'));
    // Assuming there is only one train station nearby and its document structure contains a 'name' field
    const nearbyStationName = stationsSnapshot.docs[0]?.data()?.name;
    if (!nearbyStationName) {
      throw new Error("No nearby train station found.");
    }

    // Extract the first two letters of the station name and append 'L' to form the train line code
    const trainLineCode = `${nearbyStationName.substring(0, 2)}L`;

    // Trigger updates on the backend for the train line
    await axios.get(`http://localhost:8000/api/platformCrowdDensity`, { params: { trainLine: trainLineCode } });

    // Fetch the updated density for the nearby station from Firestore
    const q = query(collection(db, 'TrainStationPlatformDensity'), where('name', '==', nearbyStationName));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      const data = querySnapshot.docs[0].data();
      return { name: data.name, density: data.PlatformDensity };
    }

    return { error: "Density data not found for the nearby station." };

  } catch (error) {
    console.error("Error fetching platform densities:", error);
    return { error: error.message };
  }
};

export { fetchPlatformDensities };