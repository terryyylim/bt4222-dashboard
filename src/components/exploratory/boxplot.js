import React, { Component } from 'react';

// import jsx-highcharts
import { withHighcharts, HighchartsChart, Chart, XAxis, YAxis, Title, Subtitle, Legend, LineSeries, BoxPlotSeries, Tooltip } from 'react-jsx-highcharts';
import Highcharts from 'highcharts';
import addHighchartsMore from 'highcharts/highcharts-more';
addHighchartsMore(Highcharts);

class BoxPlot extends Component {
  render() {
    if (this.props.sentiments !== undefined) {
      return(
        <div>
          <HighchartsChart>
            <Chart />
  
            <Title>Performance over First 20 Levels</Title>
  
            <Subtitle>Source: Achievements App</Subtitle>
  
            <XAxis categories={this.props.phrases}>
                <XAxis.Title>Level</XAxis.Title>
            </XAxis>
  
            <YAxis id="boxplot" min="0" max="1200" tickInterval="200" scrollbar="enabled">
              <YAxis.Title>Phone Features</YAxis.Title>
              <BoxPlotSeries label="Time Taken" data={this.props.sentiments} />
              <Tooltip />
            </YAxis>
          </HighchartsChart>
        </div>
      )
    } else {
      return null;
    }
  }
}

export default withHighcharts(BoxPlot, Highcharts); // Injecting the Highcharts object
