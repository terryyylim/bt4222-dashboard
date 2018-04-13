import React, { Component } from 'react';
import axios from 'axios'
import {ComposedChart, BarChart, LineChart, Bar, Line, Brush, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'
import moment from 'moment'

class SentimentPostsOverTime extends Component {

  render() {
    const postData = this.props.results.num_posts

    return(
      <BarChart width={1600} height={300} data={post}
          margin={{top: 20, right: 30, left: 20, bottom: 5}}>
     <CartesianGrid strokeDasharray="3 3"/>
     <XAxis dataKey="date"/>
     <YAxis/>
     <Tooltip/>
     <Legend />
     <Bar dataKey="facebook" stackId="a" fill="#8884d8" />
     <Bar dataKey="instagram" stackId="a" fill="#82ca9d" />
     <Bar dataKey="twitter" stackId="a" fill="#a00020" />
    </BarChart>
    )
  }
}

export default SentimentPostsOverTime; // Injecting the Highcharts object
