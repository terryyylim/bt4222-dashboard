import React, { Component } from 'react';
import ReactChartkick, { BarChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'

ReactChartkick.addAdapter(Chart)
const options = {
  title: {
    display: true,
    text: 'Phone Weaknesses'
  }
}

class PhoneWeaknesses extends Component {
  render() {
    return(
      <BarChart data={[["Camera", 5], ["Battery", 27], ["Screen", 14]]} xtitle="Count" ytitle="Attributes" colors={["#000"]} />
    )
  }
}

export default PhoneWeaknesses;