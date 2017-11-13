import React, { Component } from 'react';
import './Chart.css';

class Chart extends Component {
  let LineChart = require("react-chart.js").Line;

  constructor(props){
    super(props);
    this.state = {data: []}
  }

  componentDidMount() {
    fetch(this.props.endpoint).then(res => res.json()).then(data => this.setState({data}));
  }

  render(){
    return <LineChart data={this.state.data} width="600" height="250"/>;
  }
}

export default Chart;
