import fetch from 'node-fetch';

const API_KEY = "JPf+lIoDSIe6uPk+lHf2fA==";

export async function fetchBusArrival(busStopCode = '83139') {
  const url = `http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2?BusStopCode=${busStopCode}`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "AccountKey": API_KEY,
      },
    });
    return await response.json();
  } catch (error) {
    console.error("Error fetching bus arrival:", error);
    throw error; // Rethrow for caller to handle
  }
}