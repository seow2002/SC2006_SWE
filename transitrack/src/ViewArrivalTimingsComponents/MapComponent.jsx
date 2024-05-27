import React, { useEffect, useRef, useState } from 'react';
import { db } from '../firebase'; // Adjust this path as needed
import { collection, writeBatch, doc, getDocs, deleteDoc } from 'firebase/firestore';
import { fetchAllBusStops } from './FetchAllBusStops';
import BusArrivalTimingContainer from './BusArrivalTimingContainer';

const MapComponent = ({ latitude, longitude, onBusStopSelect, updateBusTimings }) => {
  const mapRef = useRef(null); // Ref for the map DOM element
  const [map, setMap] = useState(null); // State to hold the map object
  
  // Initialization of the map
  useEffect(() => {
    async function initMap() {
      const { Map } = await window.google.maps.importLibrary("maps");
      const { Marker } = await window.google.maps.importLibrary("marker");
      const center = { lat: latitude, lng:longitude };
      const initMap = new Map(mapRef.current, {
        center: center,
        zoom: 18,
        mapId: '38280499b3e17def',
      });
      setMap(initMap);
      await deleteExistingBusStops();
      await nearbySearch(initMap, center);
    }

    if (window.google) {
      initMap();
    }
  }, []);

  async function deleteExistingBusStops() {
    const querySnapshot = await getDocs(collection(db, "busStops"));
    const batch = writeBatch(db);

    querySnapshot.forEach((doc) => {
      batch.delete(doc.ref);
    });

    await batch.commit();
    console.log("Existing bus stops deleted successfully.");
  }


  // The nearbySearch function is similar to your original, but it uses the map state
  async function nearbySearch(map, center) {
    const { Place, SearchNearbyRankPreference } = await window.google.maps.importLibrary("places");
    const { AdvancedMarkerElement } = await window.google.maps.importLibrary("marker");
    const request = {
      fields: ["displayName", "location", "businessStatus"],
      locationRestriction: {
        center: center,
        radius: 500,
      },
      includedPrimaryTypes: ["bus_stop"],
      maxResultCount: 8,
      rankPreference: SearchNearbyRankPreference.POPULARITY,
      language: "en-US",
      region: "sg"
    };
    const { places } = await Place.searchNearby(request);

    if (places.length) {
      console.log(places);
      console.log(places);
      const busStopsBatch = writeBatch(db);
      const busStopsCollection = collection(db, "busStops");
      const { LatLngBounds } = await window.google.maps.importLibrary("core");
      const bounds = new LatLngBounds();

      places.forEach((place) => {
        const markerView = new AdvancedMarkerElement({
          map,
          position: place.location,
          title: place.displayName,
        });

        // Add a click event listener to the marker
        markerView.addListener('click', () => {
          if (onBusStopSelect) {
            console.log(place.displayName);
            updateBusTimings([]);      //clear previous timings
            onBusStopSelect(place.location.toJSON()); // Call the prop function with the location
            getBusStopCode(place.displayName);
          }
        });

        const busStopName = place.displayName; // Assuming 'displayName' holds the bus stop name
        const docRef = doc(db, "busStops", busStopName); // Use busStopName as the document ID
        busStopsBatch.set(docRef, {
          name: place.displayName,
          location: place.location.toJSON(),
        });

        bounds.extend(place.location);
        console.log(place);
      });

      try {
        await busStopsBatch.commit();
        console.log("Bus stops data successfully written to Firestore.");
      } catch (error) {
        console.error("Error writing bus stops data to Firestore: ", error);
      }

      map.fitBounds(bounds);
    } else {
      console.log("No results");
    }
  }

  const getBusStopCode = async (clickedDescription) => {
    if (!clickedDescription) {
      console.error("No description provided for the clicked bus stop.");
      return;
    }
  
    const allBusStops = await fetchAllBusStops();
    const matchingBusStop = allBusStops.find(busStop => 
      busStop.Description && busStop.Description.toLowerCase() === clickedDescription.toLowerCase()
    );
  
    if (matchingBusStop) {
      console.log("Bus Stop Code:", matchingBusStop.BusStopCode); // You now have the clicked bus stop's code
      // Perform any action with the bus stop code
      getBusArrivalTimings(matchingBusStop.BusStopCode);
    } else {
      console.log("No matching bus stop found.");
    }
  };

  const getBusArrivalTimings = async (busStopCode) => {
    try {
      const response = await fetch(`http://localhost:8000/api/busArrival?busStopCode=${busStopCode}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      updateBusTimings(data.Services); // Set the bus timings state
    } catch (error) {
      console.error("Could not fetch bus arrival timings:", error);
    }
  };


  return (
    <div ref={mapRef} style={{ width: '200%', height: '600px', position: 'relative', left: '50%', bottom: '0%', transform: 'translateX(-50%)', marginTop: '80px', }}>
      {/* Map and other components */}
  

    </div>
  );
};

export default MapComponent;