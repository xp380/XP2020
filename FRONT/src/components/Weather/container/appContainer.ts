import React from 'react';
import DayCard from '../app_component/DayCard';
import HourlyChart from '../app_component/HourlyChart';
import { CurrentWeatherContext } from '../context/currentWeatherContext';
import { CircularProgress } from '@material-ui/core';
import Container from '@material-ui/core/Container';

const AppContainer = () => {

    return (
        <CurrentWeatherContext.Consumer>{
            (context) => {
                const currentWeather = context.currentWeather;
                if (currentWeather) {
                    const dailyData = currentWeather.dailyData
                    const hourlyData = currentWeather.hourlyData
                    const setSelectedDayWeather = context.setSelectedDayWeather;
                    return (
                        <Container>
                            <HourlyChart
                                todayWeather={context.selectedDayWeather}
                                hourlyData={hourlyData} />
                            <DayCard
                                dailyData={dailyData}
                                setSelectedDayWeather={setSelectedDayWeather}
                            />

                        </Container>
                    )
                } else {
                    return <CircularProgress size={50} />
                }
            }}
        </CurrentWeatherContext.Consumer>
    )
}

export default AppContainer;