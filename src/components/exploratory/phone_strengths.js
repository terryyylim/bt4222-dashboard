import React, { Component } from 'react';
import axios from 'axios'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'

class PhoneStrengths extends Component {

  render() {
    return(
      <BarChart width={800} height={300} data={this.props.results}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="phrase" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="occurrences" fill="#3A91F7" />
      </BarChart>
    )
  }
}

export default PhoneStrengths; // Injecting the Highcharts object
