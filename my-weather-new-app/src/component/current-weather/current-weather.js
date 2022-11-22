import "./current-weather.css";

const CurrentWeather = ({ data }) => {
  
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <div className="country-city">
                        <p className="city">{data.city}</p>
                        <p className="country">{data.location.country}</p>
                    </div>
                    <p className="weather-description">{data.city}</p>
                </div>
                
            </div>
            <div className="bottom">
                <p className="temperature">{Math.round(data.current.temp_c)}°C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-lebel">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-lebel">Feels Like</span>
                        <span className="parameter-value">{Math.round(data.current.feelslike_c)}°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-lebel">Wind</span>
                        <span className="parameter-value">{data.current.wind_mph} m/h</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-lebel">Humidity</span>
                        <span className="parameter-value">{data.current.humidity}%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-lebel">Pressure</span>
                        <span className="parameter-value">{data.current.pressure_mb} mb</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather;