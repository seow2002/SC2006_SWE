const getBusArrivalTimings = async (busStopCode) => {
    try {
      // Replace 'http://localhost:8000' with your actual backend server's URL
      const response = await fetch(`http://localhost:8000/api/busArrival?busStopCode=${busStopCode}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data); // Log the data or set it in state
      return data; // You can return it if you need to use the data outside of this function
    } catch (error) {
      console.error("Could not fetch bus arrival timings:", error);
    }
  };
  