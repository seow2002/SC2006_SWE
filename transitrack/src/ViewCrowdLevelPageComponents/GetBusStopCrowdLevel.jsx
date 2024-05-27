import React, { useEffect, useState } from 'react';
import { fetchNearbyBusStops } from './FetchNearbyBusStops';
import { fetchAllBusStops } from './FetchAllBusStops';
import { fetchBusStopPassengerVolume } from './FetchBusStopPassengerVolume';

const GetBusStopCrowdLevel = ({ updateCrowdLevels }) => {
  const [crowdLevels, setCrowdLevels] = useState([]);

  // Function to get the current hour in 24-hour format as a string
  const getCurrentTimePerHour = () => {
    const currentDate = new Date();
    return currentDate.getHours().toString();
  };

  // Function to determine if today is a weekday or a weekend/holiday
  const getCurrentDayType = () => {
    const currentDate = new Date();
    // Example: Define your holidays here in 'MM/DD' format
    const holidays = ['01/01', '12/25']; // New Year's Day and Christmas
    const formattedDate = (currentDate.getMonth() + 1).toString().padStart(2, '0') + '/' + currentDate.getDate().toString().padStart(2, '0');

    if (currentDate.getDay() === 0 || currentDate.getDay() === 6 || holidays.includes(formattedDate)) {
      return 'WEEKENDS/HOLIDAY';
    } else {
      return 'WEEKDAY';
    }
  };

  useEffect(() => {
    const getCrowdLevels = async () => {
      const dayType = getCurrentDayType();
      const timePerHour = getCurrentTimePerHour();

      const nearbyStops = await fetchNearbyBusStops();
      const allStops = await fetchAllBusStops();
      const crowdData = [];

      for (const nearbyStop of nearbyStops) {
        const match = allStops.find(stop => stop.name === nearbyStop);
        if (match) {
          // Now pass dayType and timePerHour to fetchBusStopPassengerVolume.
          const volumeData = await fetchBusStopPassengerVolume(match.code, dayType, timePerHour);
          if (volumeData.length > 0) { // Assuming volumeData is an array
            crowdData.push({ stopName: nearbyStop, volume: volumeData[0].totalTapInVolume }); // Adjust according to actual data structure
          }
        }
      }
      updateCrowdLevels(crowdData);
    };

    getCrowdLevels();
  }, []);

  return null;
};

export default GetBusStopCrowdLevel;
