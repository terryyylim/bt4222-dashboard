import React, { Component } from 'react';
import ReactChartkick, { ColumnChart } from 'react-chartkick'
import Chart from 'chart.js'

class PredictedLikes extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <ColumnChart data={[["Facebook", 5], ["Instagram", 27], ["Twitter", 14]]} xtitle="Social Media" ytitle="Like Counts" colors={["#666"]} />
    )
  }
}

export default PredictedLikes;