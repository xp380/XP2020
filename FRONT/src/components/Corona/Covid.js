import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

const Covid = () => {
  const [chartData, setChartData] = useState({});


  const chart = () => {
    let packDeces = [];
    let packGueris = [];
    let packDate = [];
    let packHospitalises = [];
    let packReanimation = [];

    axios
      .get("https://coronavirusapi-france.now.sh/AllDataByDepartement?Departement=Paris")
      .then(res => {
        console.log(res);
        for (const dataObj of res.data.allDataByDepartement) {
          packDeces.push(parseInt(dataObj.deces));
          packGueris.push(parseInt(dataObj.gueris));
          packHospitalises.push(parseInt(dataObj.hospitalises));
          packReanimation.push(parseInt(dataObj.reanimation));

          packDate.push(parseInt(dataObj.date));
        }
        setChartData({
          labels: packDate,
          datasets: [
            {
              label: "Nombre de décès",
              data: packDeces,
              backgroundColor: "yellow",
              borderWidth: 4
            },
            {
              label: "Nombre de guéris",
              data: packGueris,
              backgroundColor: "green",
              borderWidth: 4
            },
            {
              label: "Nombre d'hospitalisés",
              data: packHospitalises,
              backgroundColor: "red",
              borderWidth: 4
            },
            {
              label: "Nombre de réanimations",
              data: packReanimation,
              backgroundColor: "blue",
              borderWidth: 4
            }
          ]
        });
      })
      .catch(err => {
        console.log(err);
      });
    console.log(packDeces, packDate);
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <div className="App">
      <div>
        <Line
          data={chartData}
          options={{
            responsive: false,
            title: { text: "statistiques du Covid", display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: false,
                    beginAtZero: true
                  },
                  gridLines: {
                    display: true
                  }
                }
              ],
              xAxes: [
                {
                  gridLines: {
                    display: true
                  },
                }
              ]
            }
          }}
        />
      </div>
    </div>
  );
};

export default Covid;
