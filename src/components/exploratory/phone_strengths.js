import React, { Component } from 'react';
import axios from 'axios'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'

class PhoneStrengths extends Component {

  render() {
    return(
      <BarChart
        width={700}
        height={300}
        data={this.props.results}
        layout="vertical"
        margin={{top: 5, right: 30, left: 30, bottom: 5}}
      >
        <XAxis type="number"/>
        <YAxis type="category" dataKey="phrase" />
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Legend />
        <Bar dataKey="occurrences" fill="#3A91F7" />
      </BarChart>
    )
  }
}

export default PhoneStrengths; // Injecting the Highcharts object
