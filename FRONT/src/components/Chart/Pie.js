import React from 'react'
import ReactApexChart from "react-apexcharts";

export default class Pie extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [30, 30, 5, 30, 5],
        options: {
          title: {
            text: "Présentation de Personnalité"
          },
          labels: ['Sang-froid', 'Professionnel', 'Immature', 'Sérieux', 'Blagueur'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              title: {
                text: "Personality Presentation"
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        }, 
      };
    }
    render() {
      return (
  <div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="pie" width={380} />
</div>
      );
    }
  }