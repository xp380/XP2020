import React, { useState, useEffect } from 'react'
import axios from "axios"

export default function Movies() {
    const [data, setData] = useState({ Search: [] });
// En utilisant useState, il faut que la valeur Search soit le même que la donnée de l'endpoint.

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios("https://www.omdbapi.com/?s=man&apikey=cdb56670");
            setData(result.data);
        };
        fetchData();
    }, [data]);


    return (
        <>
            {data.Search.map(item => (
                <ul>
                <li key={item.Title}>
                    <div>{item.Year}</div>
                    <div>{item.Title}</div>
                    <div>{item.imdbID}</div>
                    <div>{item.Type}</div>
                    <img width="200" height="200" alt={`the movie titled: ${item.Title}`} src={item.Poster}/>
                </li>
                </ul>
            ))}
        </>
    );
}