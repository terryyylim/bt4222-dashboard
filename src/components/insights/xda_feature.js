import React, { Component } from 'react';

// import styling components
import ReactChartkick, { BarChart } from 'react-chartkick'
import Chart from 'chart.js'

class XdaFeature extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <BarChart data={[["Camera", 5], ["Screen", 27], ["Battery", 14]]} xtitle="Counts" ytitle="Features" colors={["#FAA43A"]} />
    )
  }
}

export default XdaFeature;