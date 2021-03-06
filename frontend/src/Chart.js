import React from 'react';
import './Chart.css';
import {Line} from 'react-chartjs-2';
import axios from 'axios'

class Chart extends React.Component {
  constructor(props){
    super(props);
    let d = new Date();
    this.state = {
      date: new Date(), time: d.getTime, temperature: [], humidity: [], data: {
        datasets: [
          {
            label: 'Temperature',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(252,192,192,0.4)',
            borderColor: 'rgba(252,192,192,1)',
            borderCapStyle: 'butt',
            borderWidth: 0,
            borderDash: [],
            xAxisid: 'x',
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(252,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(252,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: []
          }, {
            label: 'Humidity',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(252,192,192,0.4)',
            borderColor: 'rgba(252,192,192,1)',
            borderWidth: 0,
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(252,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(252,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: []
          }
        ]
      }};
    this.options = {
      showLines: false,
      scales: {
        yAxes: [
          {
            ticks: {
              suggestedMin: 0,
              suggestedMax: 25
            }
          }
        ],
        xAxes: [
          {
            id: 'x',
            type: 'linear',
            position: 'bottom',
            gridLines: {
              zeroLineColor: "rgba(0, 255, 0, 1)"
            },
            scaleLabel: {
              display: true,
              labelString: 'x axis'
            },
            ticks: {
              suggestedMin: d.getTime()
            }
          }
        ]
      }
    }
  }
  componentDidMount(){
    console.log(this.state.temperature)
    this.setState({
      date: new Date(),
      time: 0,
      temperature: [],
      humidity: [],
      data: {
        datasets: [{
          label: 'Temperature',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(252,192,192,0.4)',
          borderColor: 'rgba(252,192,192,1)',
          borderCapStyle: 'butt',
          borderWidth: 0,
          borderDash: [],
          xAxisid: 'x',
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(252,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(252,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: []
        }, {
          label: 'Humidity',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(252,192,192,0.4)',
          borderColor: 'rgba(252,192,192,1)',
          borderWidth: 0,
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(252,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(252,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: []
        }]
      }
    });
    this.interval = setInterval(() => {
      let t = this.state.time
      console.log(1)
      axios.get('https://photon-project.appspot.com/handle', {
        params: {
          'time': t
        }
      }).then((response) => {
        let temp = this.state.temperature
        let hum = this.state.humidity
        console.log(response)
        for (let key in response['data']['temperature']){
          temp.push({"x":key, "y":response['data']['temperature'][key]})
        }
        for (let key in response['data']['humidity']) {
          hum.push({ "x": key, "y": response['data']['humidity'][key] })
        }
        this.setState({temperature: temp})
        this.setState({ humidity: hum})
      }).catch(function (error) {
        console.log(error);
      });
      console.log(this.state.temperature)
      let new_temperature = this.state.temperature
      let new_humidity = this.state.humidity
      console.log(new_temperature)
      console.log(new_humidity)
      this.setState({data: {
        datasets: [
          {
            label: 'Temperature (celsius)',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(252,192,192,0.4)',
            borderColor: 'rgba(252,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            xAxisid: 'x',
            elements: {
              line: {
                backgroundColor: 'rgba(0, 0, 0 ,0)',
                borderWidth: 0,
                borderColor: 'rgba(0, 0, 0, 0)',
                fill: false,
              }
            },
            borderDashOffset: 0.0,
            borderWidth: 0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(256,256,256,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(252,192,192,1)',
            pointHoverBorderColor: 'rgba(256,256,256,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: new_temperature
          }, {
            label: 'Humidity',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(252,192,192,0.4)',
            borderColor: 'rgba(252,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderWidth: 0,
            elements: {
              line: {
                backgroundColor: 'rgba(0, 0, 0 ,0)',
                borderWidth: 0,
                borderColor: 'rgba(0, 0, 0, 0)',
                fill: false,
              }
            },
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(256,256,256,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(252,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: new_humidity
          }
        ]
      }})
      this.state.data.datasets[0].data.sort((a, b) => {return a.x - b.x});
      this.state.data.datasets[1].data.sort((a, b) => { return a.x - b.x });
      this.setState({date : new Date()})
      this.setState({ time: this.state.date.getTime() });
    }, 1000);
  }
  // printState(){
  //   console.log(this.state)
  // }
  // fetchNewData(){
  //   console.log("tick")
  //   axios.get('https://photon-project.appspot.com/handle',{
  //     params: {
  //       'time': this.state.time
  //     }
  //   }).then(function(response) {
  //     console.log(response);
  //   }).catch(function (error){
  //     console.log(error);
  //   });
  //   this.setState({time: this.state.date.getTime()});
  // };

  render(){
    return (<div id='chart'>
    <h2>DHT11 Temperature and Humidity Sensor</h2>
    <Line data={this.state.data} options={this.options}/>
    </div>);
  }
}

export default Chart;

// export default React.createClass({
//   displayName: 'Chart',

//   render() {
//     return (<div id='chart'>
//       <h2>Line Example</h2>
//       <Line data={data} options={options}/>
//     </div>);
//   }
// });
