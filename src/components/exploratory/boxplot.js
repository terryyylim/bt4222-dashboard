import React, { Component } from 'react';
import axios from 'axios'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'



class BoxPlot extends Component {

  render() {
    return(
      <BarChart width={700} height={332} data={this.props.results}
            margin={{top: 20, right: 30, left: 20, bottom: 5}}>
       <CartesianGrid strokeDasharray="3 3"/>
       <XAxis dataKey="brand"/>
       <YAxis/>
       <Tooltip/>
       <Legend />
       <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    )
  }
}

export default BoxPlot; // Injecting the Highcharts object
