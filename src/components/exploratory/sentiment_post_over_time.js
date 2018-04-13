import React, { Component } from 'react';
import axios from 'axios'
import {ComposedChart, BarChart, LineChart, Bar, Line, Brush, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'
import moment from 'moment'

class SentimentPostsOverTime extends Component {

  render() {
    const postData = this.props.results.num_posts

    return(
    <ComposedChart width={1600} height={300} data={postData}>
     <CartesianGrid strokeDasharray="3 3"/>
     <XAxis dataKey="date"/>
     <YAxis/>
     <Tooltip/>
     <Legend />
     <Line type='monotone' dataKey='xda' stroke='#ff7300' />
     <Line type='monotone' dataKey='gsm' stroke='#b21cad' />
     <Line type='monotone' dataKey='androidcentral' stroke='#413ea0' />
     <Bar dataKey="facebook" stackId="a" fill="#8884d8" />
     <Bar dataKey="instagram" stackId="a" fill="#82ca9d" />
     <Bar dataKey="twitter" stackId="a" fill="#a00020" />
    </ComposedChart>
    )
  }
}

export default SentimentPostsOverTime; // Injecting the Highcharts object
