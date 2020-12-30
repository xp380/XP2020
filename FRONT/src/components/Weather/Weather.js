import React from "react";
import "./Weather.css";
import LocationContextProvider from "./context/locationContext";
import CurrentWeatherContextProvider from "./context/currentWeatherContext";
import { Typography } from "@material-ui/core";
import AppContainer from "./container/appContainer";

class Weather extends React.Component {
    render() {
        return (
            <div className="App">
                <Typography variant='h4'>Météo
        </Typography>
                <LocationContextProvider>
                    <CurrentWeatherContextProvider>
                        <AppContainer />
                    </CurrentWeatherContextProvider>
                </LocationContextProvider>
            </div>
        );
    }
}

export default Weather;

