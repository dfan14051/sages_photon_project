import React, { Component } from 'react';
import './Chart.css';
import Line from 'react-chartjs-2';

class Chart extends Component {

  constructor(props){
    super(props);
    this.state = {data: []}
  }

  componentDidMount() {
    fetch(this.props.endpoint).then(res => res.json()).then(data => this.setState({data}));
  }

  render(){
    return <Line data={this.state.data} width="600" height="250"/>;
  }
}

export default Chart;
