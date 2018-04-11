import React, { Component } from 'react';
import ReactChartkick, { BarChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'

class PhoneStrengths extends Component {
  render() {
    return(
      <BarChart data={[["Camera", 5], ["Battery", 27], ["Screen", 14]]} xtitle="Count" ytitle="Attributes" colors={["#666"]} />
    )
  }
}

export default PhoneStrengths; // Injecting the Highcharts object