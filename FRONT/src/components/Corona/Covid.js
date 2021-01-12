import React, { useState, useEffect } from 'react'
import axios from "axios"

export default function Covid() {
    const [data, setData] = useState({ allDataByDepartement: []})
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios("https://coronavirusapi-france.now.sh/AllDataByDepartement?Departement=Paris");
            setData(result.data);
        };
        fetchData();
    }, [data]);
    return (
        <>
        statistiques du Covid à Paris
            {data.allDataByDepartement.map(item => (
                <ul>
                <li key={item.code}>
                    <div>Date:{item.date}</div>
                    <div>Décès:{item.deces}</div>
                    <div>Guéris:{item.gueris}</div>
                    <div>Hospitalisés:{item.hospitalises}</div>
                    <div>Réanimation:{item.reanimation}</div>
                </li>
                </ul>
            ))}
        </>
    )
}
// https://coronavirusapi-france.now.sh/AllDataByDepartement?Departement=Paris
// dc9894cd6eeb6308a58fc373453687f6a62f761a
// https://api.waqi.info/feed/beijing/?token=dc9894cd6eeb6308a58fc373453687f6a62f761a 
// http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}
