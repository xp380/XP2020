import React, { useState } from 'react';
import Form from './Form';
import Picture from './Picture';

function Weather() {
    //set up state and api key
    const [weather, setWeather] = useState([])
    //this api key is no longer working and has been removed as default 
    const APIKEY = '2e11f4427491472f1933ea02c01c9d3d'
    // async function fetch set state to api call and organize data

    async function fetchData(e) {
        const city = e.target.elements.city.value
        const country = e.target.elements.country.value
        e.preventDefault()
        const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${APIKEY}`)
            .then(res => res.json())
            .then(data => data)
        // .then(console.log(res.json()))
        if (city && country) {
            //error handling for input city and country
            setWeather({
                data: apiData,
                city: apiData.city,
                country: apiData.sys.country,
                description: apiData.weather[0].description,
                temperature: Math.round(apiData.main.temp * 9 / 5 - 459.67),
                error: ""
            }
            )
        } else {
            setWeather({
                data: '',
                city: '',
                country: '',
                description: '',
                temperature: '',
                error: "Please Type A City And Country"
            }
            )
        }
    }

    return (
        //send props to form and weather and console weather data
        <div className="App">
            <h3>WEATHER APP</h3>
            <Form getWeather={fetchData} />
            <Picture
                city={weather.city}
                country={weather.country}
                description={weather.description}
                temperature={weather.temperature}
                error={weather.error}
            />
            {console.log(weather.data)}
        </div>
    );
}

export default Weather;
