import React from 'react'
import ReactApexChart from "react-apexcharts";

class Radar extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          name: 'Series 1',
          data: [80, 30, 60, 30, 100, 60],
        }],
        options: {
          chart: {
            height: 350,
            type: 'radar',
          },
          title: {
            text: 'Skills Presentation'
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
<ReactApexChart options={this.state.options} series={this.state.series} type="radar" height={350} />
</div>
      );
    }
  }

  export default Radar