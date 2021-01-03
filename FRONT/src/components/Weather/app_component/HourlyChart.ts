import React from 'react';

import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';

export default class HourlyChart extends React.Component {

    state = {

        labels: [],
        datasets: [
            {

                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [65, 59, 80, 81, 56]
            }
        ]
    }


    componentDidMount = () => {
        const hourlyData = this.props.hourlyData
        if (hourlyData) {
            var x = 60; //minutes interval
            var times = []; // time array
            var tt = 0; // start time
            var ap = ['AM', 'PM']; // AM-PM

            //loop to increment the time and push results in array
            for (var i = 0; tt < 24 * 60; i++) {
                var hh = Math.floor(tt / 60); // getting hours of day in 0-24 format
                times[i] = ((hh % 12)) + ap[Math.floor(hh / 12)]; // pushing data in array in [00:00 - 12:00 AM/PM format]
                tt = tt + x;
            }

            let dataset = [];
            let set = [];

            hourlyData.forEach((hour, i) => {
                if (i < 24) {
                    const celsius = Math.round(hour.temp - 273.5);
                    set.push(celsius);
                }
            });
            dataset[0] = { ...this.state.datasets[0], data: set }
            this.setState({ labels: times, datasets: dataset })
        }
    }


    render() {
        const { todayWeather } = this.props;
        const { temp } = todayWeather;
        const temp1 = Math.round(temp.eve - 273.5);

        return (
            <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: `start`, paddingTop: '10px' }}>
                <Typography variant={"h3"} style={{ fontWeight: '700' }}>{temp1 + "°C"}</Typography>
            </Box>
        );
    }
}
