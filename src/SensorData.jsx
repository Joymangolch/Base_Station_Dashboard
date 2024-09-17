// src/SensorData.jsx
import React, { useEffect, useState } from 'react';
import './index.css'; // Ensure the CSS file is imported

const SensorData = () => {
  const [data, setData] = useState({
    heartRate: 0,
    temperature: 0,
    gasLevel: 0,
    location: { lat: 0, lng: 0 }
  });

  useEffect(() => {
    // Fetch sensor data from API or mock data
    const fetchData = async () => {
      // Replace with actual API call
      const response = await fetch('/api/sensor-data');
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div className="sensor-data">
      <h2>Sensor Data</h2>
      <p>Heart Rate: {data.heartRate} bpm</p>
      <p>Temperature: {data.temperature} °C</p>
      <p>Gas Level: {data.gasLevel}</p>
      <p>Location: {data.location.lat}, {data.location.lng}</p>
    </div>
  );
};

export default SensorData;
