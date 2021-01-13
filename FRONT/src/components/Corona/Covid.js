import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Statistic ,Row, Col} from 'antd'

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
                <Row gutter={13}>
                <Col span={4}>
                  <Statistic title="Date" value={item.date}  />
                </Col>
                <Col span={5}>
                  <Statistic title="Décès" value={item.deces} />
                </Col>
                <Col span={5}>
                  <Statistic title="Guéris" value={item.gueris} />
                </Col>
                <Col span={5}>
                  <Statistic title="Hospitalisés" value={item.hospitalises} />
                </Col>
                <Col span={5}>
                  <Statistic title="Réanimation" value={item.reanimation} />
                </Col>
              </Row>
            ))}
        </>
    )
}
// https://coronavirusapi-france.now.sh/AllDataByDepartement?Departement=Paris
// dc9894cd6eeb6308a58fc373453687f6a62f761a
// https://api.waqi.info/feed/beijing/?token=dc9894cd6eeb6308a58fc373453687f6a62f761a 
// http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}
