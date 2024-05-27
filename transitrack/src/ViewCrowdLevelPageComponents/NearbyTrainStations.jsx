import React, { useEffect, useRef, useState } from 'react';
import { db } from '../firebase'; // Adjust this path as needed
import { collection, writeBatch, doc , getDocs, deleteDoc} from 'firebase/firestore';

const NearbyTrainStations = ({ latitude, longitude }) => {
  const mapRef = useRef(null); // Ref for the map DOM element
  const [map, setMap] = useState(null); // State to hold the map object

  // Initialization of the map
  useEffect(() => {
    async function initMap() {
      const { Map, Marker } = await window.google.maps.importLibrary("maps");

      const center = { lat: latitude, lng:longitude };
      const initMap = new Map(mapRef.current, {
        center: center,
        zoom: 11,
        mapId: '38280499b3e17def',
      });
      setMap(initMap);
      await deleteExistingTrainStations();
      nearbySearch(initMap, center);
    }

    if (window.google) {
      initMap();
    }
  }, []);

    async function deleteExistingTrainStations() {
        const querySnapshot = await getDocs(collection(db, "NearbyTrainStations"));
        const batch = writeBatch(db);

        querySnapshot.forEach((doc) => {
        batch.delete(doc.ref);
        });

        await batch.commit();
        console.log("Existing train stations deleted successfully.");
    }

  // The nearbySearch function is similar to your original, but it uses the map state
    async function nearbySearch(map, center) {
        const { Place, SearchNearbyRankPreference } = await window.google.maps.importLibrary("places");
        const { AdvancedMarkerElement } = await window.google.maps.importLibrary("marker");
        const request = {
        fields: ["displayName", "location", "businessStatus"],
        locationRestriction: {
            center: center,
            radius: 10000,
        },
        includedPrimaryTypes: ["train_station"],
        maxResultCount: 8,
        rankPreference: SearchNearbyRankPreference.POPULARITY,
        language: "en-US",
        region: "sg",
        };
    const { places } = await Place.searchNearby(request);

    if (places.length) {
      console.log(places);
      console.log(places);
      const trainStationsBatch = writeBatch(db);
      const trainStationsCollection = collection(db, "NearbyTrainStations");
      const { LatLngBounds } = await window.google.maps.importLibrary("core");
      const bounds = new LatLngBounds();

      places.forEach((place) => {
        const markerView = new AdvancedMarkerElement({
          map,
          position: place.location,
          title: place.displayName,
        });

        const trainStationName = place.displayName;
        const docRef = doc(db, "NearbyTrainStations", trainStationName); // Automatically generate a new doc ID
        trainStationsBatch.set(docRef, {
          name: place.displayName,
          location: place.location.toJSON(), // Make sure this is in a Firestore-compatible format
        });

        bounds.extend(place.location);
        console.log(place);
      });

      try {
        await trainStationsBatch.commit();
        console.log("Train stations data successfully written to Firestore.");
      } catch (error) {
        console.error("Error writing train stations data to Firestore: ", error);
      }

      map.fitBounds(bounds);
    } else {
      console.log("No results");
    }
  }

  return <div ref={mapRef} style={{ width: '50%', height: '200px' }} />;
};

export default NearbyTrainStations;