import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = {
    title: {
        text: 'Statistiques du Covid en France'
    },

    series: [{
        data: [1, 2, 3]
    }]
}

export default function StatCovid() {
    return (
        <>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
                containerProps={{ style: { height: "100%", width: "100%" } }}
            />
        </>
    )
}