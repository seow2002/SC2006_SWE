import { db } from '../firebase.js';
import { collection, getDocs } from 'firebase/firestore';

export async function fetchNearbyBusStops() {
  const nearbyBusStops = [];
  const querySnapshot = await getDocs(collection(db, "NearbyBusStops"));
  querySnapshot.forEach(doc => {
    nearbyBusStops.push(doc.data().name);
  });
  return nearbyBusStops;
}