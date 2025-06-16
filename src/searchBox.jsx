import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searchBox.css"

function SearchBox({ updateInfo }) {
    const [city, setCity] = useState("");
    let [error, seterror] = useState(false);
    const APIurl = "https://api.openweathermap.org/data/2.5/weather";
    const APIkey = "de30724a15df46ad8386f8d6cbafabb8";


    async function getWeatherInfo() {
        try {
            const response = await fetch(`${APIurl}?q=${city}&appid=${APIkey}&units=metric`);
            let jsonResponse = await response.json();

            const result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description
            }
            console.log(result);
            return result;
        }
        catch (error) {
            throw error;
        }
    }

    function handleChange(event) {
        const newCity = event.target.value;
        setCity(newCity);
    }

    async function handleSubmit(event) {
        try {
        event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);}
        catch(error) {
            seterror(true);
        }
    }
    return (
        <div className="searchBox">
            <form onSubmit={handleSubmit}>
                <TextField
                    id="City"
                    label="City"
                    variant="filled"
                    value={city}
                    onChange={handleChange} />
                <br /><br />
                <Button
                    variant="contained"
                    type="submit"
                >
                    Search
                </Button>
                {error && <p style={{color: "red"}}>City not found</p>}
            </form>

        </div>
    );
}

export default SearchBox;