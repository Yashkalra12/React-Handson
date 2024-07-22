import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const App = () => {
  const [season, setSeason] = useState('');
  const [timeOfDay, setTimeOfDay] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Determine the season
  useEffect(() => {
    const month = new Date().getMonth();
    if (month >= 2 && month <= 4) {
      setSeason('spring');
    } else if (month >= 5 && month <= 7) {
      setSeason('summer');
    } else if (month >= 8 && month <= 10) {
      setSeason('autumn');
    } else {
      setSeason('winter');
    }
  }, []);

  // Determine the time of day
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 12) {
      setTimeOfDay('morning');
    } else if (hour >= 12 && hour < 18) {
      setTimeOfDay('noon');
    } else if (hour >= 18 && hour < 21) {
      setTimeOfDay('evening');
    } else {
      setTimeOfDay('night');
    }
  }, []);

  // Simulate fetching data with a delay
  useEffect(() => {
    setTimeout(() => {
      setData('Fetched data');
      setLoading(false);
    }, 2000); // Simulating a delay of 2 seconds
  }, []);

  const getSeasonStyle = (season) => {
    switch (season) {
      case 'spring':
        return { backgroundColor: 'lightgreen' };
      case 'summer':
        return { backgroundColor: 'lightyellow' };
      case 'autumn':
        return { backgroundColor: 'orange' };
      case 'winter':
        return { backgroundColor: 'lightblue' };
      default:
        return {};
    }
  };

  const getTimeOfDayStyle = (timeOfDay) => {
    switch (timeOfDay) {
      case 'morning':
        return { backgroundColor: 'lightgoldenrodyellow' };
      case 'noon':
        return { backgroundColor: 'lightblue' };
      case 'evening':
        return { backgroundColor: 'lightcoral' };
      case 'night':
        return { backgroundColor: 'darkblue', color: 'white' };
      default:
        return {};
    }
  };

  return (
    <div
      style={{
        ...getSeasonStyle(season),
        ...getTimeOfDayStyle(timeOfDay),
        height: '100vh',
        padding: '20px',
      }}
    >
      <h1>Season and Time Based Background</h1>
      <p>Current Season: {season.charAt(0).toUpperCase() + season.slice(1)}</p>
      <p>Current Time of Day: {timeOfDay.charAt(0).toUpperCase() + timeOfDay.slice(1)}</p>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <p>Data: {data}</p>
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
