import React, { Component } from 'react';
import axios from 'axios'
import {BarChart, Bar, Brush, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'
import moment from 'moment'

class Competitors extends Component {

  render() {
    console.log(this.props.results)
    return(
      <BarChart width={800} height={300} data={this.props.results}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="competitor" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#3A91F7" />
      </BarChart>
    )
  }
}


export default Competitors; // Injecting the Highcharts object
