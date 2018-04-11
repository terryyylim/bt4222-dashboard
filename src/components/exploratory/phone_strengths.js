import React, { Component } from 'react';
import { withHighcharts, HighchartsChart, Chart, XAxis, YAxis, Title, Subtitle, ColumnSeries, Tooltip } from 'react-jsx-highcharts';
import Highcharts from 'highcharts';

class PhoneStrengths extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stats: {'qualities': ['camera', 'sound', 'display'], 'count': [5,3,9]}
    };
  }

  getQualities() {
    var qualities = []
    for (var q = 0; q < this.state.stats.qualities.length; q++) {
      qualities.push(this.state.stats.qualities[q]);
    }
    return qualities
  }

  getCount() {
    var counts = []
    for (var q = 0; q < this.state.stats.count.length; q++) {
      counts.push(this.state.stats.count[q]);
    }
    return counts
  }

  render() {
    console.log(this.state.stats);
    console.log(this.state.stats.count);
    console.log(this.state.stats['count'][0]);
    console.log(this.state.stats['count'][1]);
    console.log(this.state.stats['count'][2]);
    return(
      <div>
        <HighchartsChart id="reviews">
          <Chart />
          <Title>Strengths (based on number of positive reviews){this.getQualities()}</Title>
          <XAxis categories={this.getQualities()}>
              <XAxis.Title>Qualities</XAxis.Title>
          </XAxis>

          <YAxis>
            <YAxis.Title>Review Count</YAxis.Title>
              <ColumnSeries id="review" name="Review Count" data={this.getCount()} />
            <Tooltip />
          </YAxis>
        </HighchartsChart>
      </div>
    )
  }
}

export default withHighcharts(PhoneStrengths, Highcharts); // Injecting the Highcharts object