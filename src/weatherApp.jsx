import React from "react";
import SearchBox from "./searchBox";
import InfoBox from "./infoBox";
import { useState } from "react";

function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Ranchi",
        tempMin: 25.05,
        tempMax: 30.05,
        temp: 24.56,
        humidity: 60,
        feelslike: 27.65,
        weather: "sunny",
    })

    let updateInfo= (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return (
        <div className="container" style={{textAlign: "center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox weatherInfo={weatherInfo}/>
        </div>
    )
}

export default WeatherApp;