import React from 'react';
import { useEffect } from 'react';
import './App.css';
import { useState } from 'react';
import { EarthquakeService } from './services/earthquake/EarthquakeService';
import { useSetEarthquakeData } from './context/hooks/updateEarthquakeData';
import { LogService } from './services/log/LogService';
import Dashboard from './pages/Dashboard';

function App() {
  const { setData } = useSetEarthquakeData();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await EarthquakeService.getData()
      console.log(response)
      if (!response.error) {
        
        setData(response.data);
        setLoaded(true);
      } else {
        alert(response.data);
        LogService.log(response);
      }
    })();
  }, []);

  return loaded ? <Dashboard /> : <>loading...</>
}

export default App;
