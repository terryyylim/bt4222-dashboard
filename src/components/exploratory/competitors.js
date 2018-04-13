import React, { Component } from 'react';
import axios from 'axios'
import {BarChart, Bar, Brush, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'
import moment from 'moment'
import { Card, Table } from 'antd'

const columns = [{
  title: 'Model',
  dataIndex: 'model',
  key: 'model',
}, {
  title: 'GSM',
  dataIndex: 'gsm',
  key: 'gsm',
},
{
  title: 'Android Central',
  dataIndex: 'androidcentral',
  key: 'androidcentral',
},
{
  title: 'Reddit',
  dataIndex: 'reddit',
  key: 'reddit',
},
{
  title: 'XDA',
  dataIndex: 'xda',
  key: 'xda',
},
{
  title: 'Total',
  dataIndex: 'total',
  key: 'total',
}
];

class Competitors extends Component {

  render() {
    return(
      <Table dataSource={this.props.results} columns={columns} pagination={{ pageSize: 4 }} />
    )
  }
}


export default Competitors; // Injecting the Highcharts object
