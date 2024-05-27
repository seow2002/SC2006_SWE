import fetch from 'node-fetch';
import AdmZip from 'adm-zip';
import path from 'path';
import fs from 'fs';

const API_KEY = "St9Nc6qhS42u45P0XS3aMQ==";

export async function fetchPassengerVolume() {
  const url = "http://datamall2.mytransport.sg/ltaodataservice/PV/Bus";
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "AccountKey": API_KEY,
      },
    });
    return await response.json();
  } catch (error) {
    console.error("Error fetching passenger volume:", error);
    throw error;
  }
}

export async function downloadAndUnzipFile(url) {
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "AccountKey": API_KEY,
        },
    });
    const buffer = await response.arrayBuffer(); // Use arrayBuffer() due to deprecation warning
    const zip = new AdmZip(Buffer.from(buffer));
    const dirname = path.dirname(new URL(import.meta.url).pathname);
    const extractedDirPath = path.join(dirname, 'extracted_data');


    // Ensure the extracted_data directory exists or create it
    if (!fs.existsSync(extractedDirPath)) {
        fs.mkdirSync(extractedDirPath, { recursive: true });
    }

    zip.extractAllTo(extractedDirPath, true);

    console.log('File successfully downloaded and extracted.');

    // Assuming you are interested in the first CSV file extracted
    const csvEntries = zip.getEntries().filter(entry => entry.entryName.endsWith('.csv'));
    if (csvEntries.length > 0) {
        const firstCsvFilePath = path.join(extractedDirPath, csvEntries[0].entryName);
        console.log(`CSV file extracted to: ${firstCsvFilePath}`);
        return firstCsvFilePath; // Return the path to the first CSV file extracted
    } else {
        throw new Error('No CSV files found in the zip archive.');
    }
}