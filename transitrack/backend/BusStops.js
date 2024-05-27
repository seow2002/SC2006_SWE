import fetch from 'node-fetch';
import { db } from './firebaseadmin.js'; // Ensure this imports correctly

async function fetchBusStops(skip = 0, allBusStops = []) {
  const API_KEY = 'JPf+lIoDSIe6uPk+lHf2fA=='; // Replace with your actual AccountKey
  const url = `http://datamall2.mytransport.sg/ltaodataservice/BusStops?$skip=${skip}`;
  
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        AccountKey: API_KEY,
        accept: 'application/json'
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    allBusStops.push(...data.value);

    // Check if there's more data to fetch
    if (data.value.length === 500) {
      return fetchBusStops(skip + 500, allBusStops);
    } else {
      return allBusStops;
    }
  } catch (error) {
    console.error('Failed to fetch bus stops:', error);
  }
}

async function uploadBusStopsToFirestore() {
  const busStops = await fetchBusStops();
  const batch = db.batch();

  busStops.forEach((busStop) => {
    const busStopRef = db.collection('AllBusStops').doc(busStop.BusStopCode);
    batch.set(busStopRef, busStop);
  });

  await batch.commit();
  console.log('Bus stops uploaded successfully.');
}

uploadBusStopsToFirestore();


export { fetchBusStops };