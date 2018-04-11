import React, { Component } from 'react';
import axios from 'axios'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'

class PhoneStrengths extends Component {

  state = {
    model: 'Samsung Galaxy S7',
    results: []
  }

  componentDidMount() {
    axios.get('http://localhost:5132/strengths/' + encodeURIComponent(this.state.model))
    .then(response => {
      this.setState({results: response.data});
    })
  }

  render() {
    const results= this.state.results;
    // const sentiments = resultsData.map((sentiments) => {
    //   return {
    //     sentiments: sentiments[3]
    //   };
    // });
    // const results = {
    //   ...resultsData,
    //   sentiments: sentiments
    // };
    console.log(results);
    return(
      <BarChart width={800} height={300} data={results}>
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
