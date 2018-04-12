import React, { Component } from 'react';

// import styling components
import ReactChartkick, { BarChart } from 'react-chartkick'
import Chart from 'chart.js'

class FacebookFeature extends Component {
  constructor(props) {
    super(props);

    this.state = {
      model: props.model
    }
  }
  
  render() {
    console.log(this.props);
    console.log(this.state.model);
    return(
      <BarChart data={[["Camera", 5], ["Screen", 27], ["Battery", 14]]} xtitle="Counts" ytitle="Features" colors={["#FAA43A"]} />
    )
  }
}

export default FacebookFeature;