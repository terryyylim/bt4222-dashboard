import React, { Component } from 'react';
import axios from 'axios'
import {LineChart, Line, Brush, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'
import moment from 'moment'

class SentimentPostsOverTime extends Component {

  render() {
    const sentimentData = this.props.results.map((item) => {
      return{
        date: item.date,
        posts: item.num_posts,
        sentiment: item.sentiment ? item.sentiment[1] * 100 : 0
      }
    });
    return(
      <LineChart width={1600} height={300} data={sentimentData}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}>
      <XAxis dataKey="date" tickFormatter={timeStr => moment(timeStr).format('YYYY/MM/DD')}/>
      <YAxis/>
      <CartesianGrid strokeDasharray="3 3"/>
      <Tooltip/>
      <Legend />
      <Line type="monotone" dataKey="posts" stroke="#8884d8" activeDot={{r: 8}}/>
      <Line type="monotone" dataKey="sentiment" stroke="#23efb9" activeDot={{r: 8}}/>
      </LineChart>
    )
  }
}

export default SentimentPostsOverTime; // Injecting the Highcharts object
