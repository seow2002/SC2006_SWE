import { db } from '../firebase.js'; 
import { collection, getDocs } from 'firebase/firestore';


export async function fetchAllBusStops() {
  const allBusStops = [];
  const querySnapshot = await getDocs(collection(db, "AllBusStops"));
  querySnapshot.forEach(doc => {
    allBusStops.push({ name: doc.data().Description, code: doc.data().BusStopCode });
  });
  return allBusStops;
}