import React, { Component } from 'react';

// import jsx-highcharts
import { withHighcharts, HighchartsChart, Chart, XAxis, YAxis, Title, Subtitle, Legend, LineSeries, BoxPlotSeries, Tooltip } from 'react-jsx-highcharts';
import Highcharts from 'highcharts';
import addHighchartsMore from 'highcharts/highcharts-more';
addHighchartsMore(Highcharts);

class BoxPlot extends Component {
  render() {
      return(
        <div>
          <HighchartsChart>
            <Chart />
            <XAxis categories={this.props.results.phrase}>
                <XAxis.Title>Level</XAxis.Title>
            </XAxis>

            <YAxis id="boxplot" min="-2" max="2" tickInterval="0.2" scrollbar="enabled">
              <YAxis.Title>Phone Features</YAxis.Title>
              <BoxPlotSeries label="Time Taken" data={this.props.results.sentiments} />
              <Tooltip />
            </YAxis>
          </HighchartsChart>
        </div>
      )
    }
}

export default withHighcharts(BoxPlot, Highcharts); // Injecting the Highcharts object
