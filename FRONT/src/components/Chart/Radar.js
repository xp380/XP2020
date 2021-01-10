import React from 'react'
import ReactApexChart from "react-apexcharts";

class Radar extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          name: 'Series 1',
          data: [80, 50, 60, 70, 100, 60],
        }],
        options: {
          title: {
            text: 'Présentation des compétences'
          },
          xaxis: {
            categories: ['Games', 'Fight', 'Tech', 'Relationship', 'Willpower', 'Intelligence']
          }
        },    
      };
    }
    render() {
      return (
  <div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="radar" height={350} width={300} />
</div>
      );
    }
  }

  export default Radar