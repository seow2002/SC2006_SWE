import express from 'express';
import cors from 'cors';
import { fetchBusArrival } from './BusArrivalTimingHandler.js';
import { fetchPassengerVolume, downloadAndUnzipFile } from './BusPassengerVolumeHandler.js';
import { fetchBusStops } from './BusStops.js';
import { uploadBusStopsData } from './UploadBusPassengerVolumeData.js'; 
import { fetchCrowdDensityData } from './PlatformCrowdDensity.js';

const app = express();
app.use(cors({
  origin: 'https://localhost:3000'
}));
const PORT = process.env.PORT || 8000;

app.get('/api/busArrival', async (req, res) => {
    try {
      const busStopCode = req.query.busStopCode || '83139'; // Default bus stop code if none provided
      const data = await fetchBusArrival(busStopCode);
      res.json(data);
    } catch (error) {
      res.status(500).send("Failed to fetch bus arrival data");
    }
});
  
const processedFiles = {};

app.get('/api/busPassengerVolume', async (req, res) => {
    try {
        const data = await fetchPassengerVolume();
        if (data && data.value && data.value[0]) {
            const downloadLink = data.value[0].Link;

            // Check if this file has already been processed
            if (processedFiles[downloadLink]) {
                return res.status(200).send("File already processed.");
            }

            const filePath = await downloadAndUnzipFile(downloadLink);
            await uploadBusStopsData(filePath);

            // Mark this file as processed
            processedFiles[downloadLink] = true;

            res.send("Passenger volume data processed and uploaded");
        } else {
            res.status(404).send("No passenger volume data found");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Failed to process passenger volume data");
    }
});

app.get('/api/busStops', async (req, res) => {
    try {
        // Directly call fetchBusStops to ensure it fetches and writes data to the file
        await fetchBusStops();

        // The fetchBusStops function now handles file writing internally,
        // so we just need to inform the client that the process was successful.
        res.send("Bus stops data processed and saved to file");
    } catch (error) {
        console.error(error);
        res.status(500).send("Failed to fetch bus stops data");
    }
});

app.get('/api/platformCrowdDensity', async (req, res) => {
    try {
      const trainLine = req.query.trainLine; // Expect a query parameter for the train line
      if (!trainLine) {
        return res.status(400).send("Please specify a train line.");
      }
      await fetchCrowdDensityData(trainLine); // Call the function with the train line
      res.send("Platform crowd density data fetched and uploaded successfully.");
    } catch (error) {
      console.error(error);
      res.status(500).send("Failed to fetch platform crowd density data");
    }
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
async function main() {
  // Your Express and other server setup code should be inside this main function or called from here
  const express = require('express');
  const app = express();
  const PORT = process.env.PORT || 3000;

  // Define headers using node-fetch's Headers constructor
  // Note: 'node-fetch' v3 and above uses the global Headers interface, make sure it's available
  const myHeaders = new Headers();
  myHeaders.append("AccountKey", "h//UGQsYRgSPYa+L5imzFQ==");

  const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
  };

  // try {
  // const response = await fetch("http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2?BusStopCode=83139", requestOptions);
  // const result = await response.text();
  // console.log(result)
  // } catch (error) {
  // console.error(error);
  // };

  // The function to fetch bus stops and update the Firestore database
const fetchBusStopsAndUpdateDatabase = async () => {
  try {
    const response = await fetch("http://datamall2.mytransport.sg/ltaodataservice/BusStops", requestOptions);
    const result = await response.json();
    
    // Logic to update Firestore with the bus stops
    // You might need to import Firebase dependencies and initialize your Firebase app
    const busStopsBatch = db.batch();
    const busStopsCollection = db.collection("busStops");

    result.value.forEach(busStop => {
      const docRef = busStopsCollection.doc(busStop.BusStopCode);
      busStopsBatch.set(docRef, {
        BusStopCode: busStop.BusStopCode,
        location: new firebase.firestore.GeoPoint(busStop.Latitude, busStop.Longitude),
        name: busStop.Description,
      });
    });

    await busStopsBatch.commit();
    console.log("Bus stops data successfully written to Firestore.");
  } catch (error) {
    console.error("Error fetching or writing bus stops data:", error);
  }
};

  fetchBusStopsAndUpdateDatabase();

  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

// Note: Any Express routes or middleware should also be defined within or called from within the main function
