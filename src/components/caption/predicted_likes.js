import React, { Component } from 'react';
import ReactChartkick, { ColumnChart } from 'react-chartkick'
import Chart from 'chart.js'

const options = {
  title: {
    display: true,
    text: 'Predicted Like Counts'
  }
}

class PredictedLikes extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <div className="caption-chart">
        <ColumnChart options={options} data={[["Facebook", 5], ["Instagram", 27], ["Twitter", 14]]} xtitle="Social Media" ytitle="Like Counts" colors={["#336699"]} />
      </div>
    )
  }
}

export default PredictedLikes;