import { db } from '../firebase.js'; 
import { collection, getDocs } from 'firebase/firestore';

export async function fetchAllBusStops() {
  const allBusStops = [];
  const querySnapshot = await getDocs(collection(db, "AllBusStops"));
  querySnapshot.forEach(doc => {
    const data = doc.data();
    if (data.Description) { // Check if Description is not undefined
      allBusStops.push({
        BusStopCode: data.BusStopCode,
        Description: data.Description,
        // Other properties if needed
      });
    }
  });
  return allBusStops;
}
