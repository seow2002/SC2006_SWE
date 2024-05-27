import fs from 'fs';
import { parse } from 'csv-parse';
import { db } from './firebaseadmin.js'; // Adjust this path as needed

export async function uploadBusStopsData(csvFilePath) {
  const records = [];

  // Create a stream from the CSV file and parse it
  const stream = fs.createReadStream(csvFilePath)
    .pipe(parse({ columns: true, delimiter: ',' }));

  for await (const record of stream) {
    // Create a unique document ID by combining PT_CODE, TIME_PER_HOUR, and DAY_TYPE
    // Replace any slashes in the composite ID with underscores to ensure it's Firestore-compatible
    const documentId = `${record.PT_CODE}_${record.TIME_PER_HOUR}_${record.DAY_TYPE}`.replace(/\//g, '_');

    // Reference to the document in Firestore
    const docRef = db.collection('BusStopPassengerVolume').doc(documentId);

    try {
      // Set the document in Firestore
      await docRef.set(record);
      console.log(`Document written with ID: ${documentId}`);
    } catch (error) {
      console.error(`Error adding document ${documentId}: `, error);
    }
  }
}