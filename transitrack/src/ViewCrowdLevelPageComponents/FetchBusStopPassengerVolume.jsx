import { db } from '../firebase.js';
import { collection, query, where, getDocs } from 'firebase/firestore';

export async function fetchBusStopPassengerVolume(busStopCode, dayType, timePerHour) {
  let volumeData = [];
  
  const busStopVolumeQuery = query(
    collection(db, "BusStopPassengerVolume"),
    where("PT_CODE", "==", busStopCode),
    where("DAY_TYPE", "==", dayType),
    where("TIME_PER_HOUR", "==", timePerHour)
  );

  const querySnapshot = await getDocs(busStopVolumeQuery);
  
  querySnapshot.forEach((doc) => {
    volumeData.push({
      totalTapInVolume: doc.data().TOTAL_TAP_IN_VOLUME,
    });
  });

  return volumeData; // Returns an array of volumes, adjust according to your needs
}
