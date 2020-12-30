import React, { useState, useEffect } from 'react'

export default function Covid() {

    useEffect(() => {
        fetch("https://coronavirusapi-france.now.sh/AllDataByDepartement?Departement=Paris")
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }, [])
    return (
        <>

        </>
    )
}
// dc9894cd6eeb6308a58fc373453687f6a62f761a
// https://api.waqi.info/feed/beijing/?token=dc9894cd6eeb6308a58fc373453687f6a62f761a 
// http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}
