import React, { Component } from 'react';
import axios from 'axios'
import {ComposedChart, BarChart, LineChart, Bar, Line, Brush, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'
import moment from 'moment'

class SentimentPostsOverTimeTwo extends Component {

  render() {
    console.log(this.props.results)
    const postData = this.props.results.sentiments ? this.props.results.sentiments.map((item) => {
      return{
        date: item.date,
        gsm: item.gsm ? item.gsm[1] * 100 : 0,
        androidcentral: item.androidcentral ? item.androidcentral[1] * 100 : 0,
        xda: item.xda ? item.xda[1] * 100 : 0
      }
    }) : [];
    return(
    <ComposedChart width={1600} height={300} data={postData}>
     <CartesianGrid strokeDasharray="3 3"/>
     <XAxis dataKey="date"/>
     <YAxis/>
     <Tooltip/>
     <Legend />
     <Line type='monotone' dot={false} activedot={false} dataKey='xda' stroke='#ff7300' />
     <Line type='monotone' dot={false} activedot={false} dataKey='gsm' stroke='#b21cad' />
     <Line type='monotone' dot={false} activedot={false} dataKey='androidcentral' stroke='#413ea0' />
    </ComposedChart>
    )
  }
}

export default SentimentPostsOverTimeTwo; // Injecting the Highcharts object
