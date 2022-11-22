import './App.css';
import Search from './component/search/search';
import CurrentWeather from './component/current-weather/current-weather';
import { CURRENT_API_URL,FORECAST_API_URL, WEATHER_API_KEY } from './api';
import { useState } from 'react';
import ForeCast from './component/forecast/forecast';

function App() {

  const [currentWeather, setcurrentWeather] = useState(null);
  const [forecast, setForeCast] = useState(null);


  const handleOnSearchChange = (searchData) => {
    const [name, region] = searchData.label.split(" ");
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${CURRENT_API_URL}?key=${WEATHER_API_KEY}&q=${name}`);

    const forecastFetch = fetch(`${FORECAST_API_URL}?key=${WEATHER_API_KEY}&q=${lat},${lon}&days=30`);

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
      
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
       
        setcurrentWeather({ city: searchData.label, ...weatherResponse });
        setForeCast({ city: searchData.label, ...forecastResponse });

      })
      .catch((err) => console.log(err));
  }

 

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast &&<ForeCast data={forecast} />}
    </div>
  );
}

export default App;
