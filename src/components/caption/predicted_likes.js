import React, { Component } from 'react';

// import styling components
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { MuiThemeProvider } from 'material-ui/styles';


class PredictedLikes extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    console.log(this.props);
    console.log(this.props.facebook)
    if (this.props.facebook !== undefined) {
      return(
        <div className="caption-chart">
          <MuiThemeProvider>
          <Card>
            <CardTitle title="Facebook" subtitle={this.props.facebook.count}>Likes</CardTitle>
          </Card>
          <Card>
            <CardTitle title="Instagram" subtitle={this.props.instagram.count}>Likes</CardTitle>
          </Card>
          <Card>
            <CardTitle title="Twitter" subtitle={this.props.twitter.count}>Retweets</CardTitle>
          </Card>
          </MuiThemeProvider>
        </div>
      )
    } else {
      return (
        <div className="caption-chart">
          <MuiThemeProvider>
          <Card>
            <CardTitle title="Social Media Prediction Status" subtitle="Choose Your Brand & Enter Your Caption!" />
          </Card>
          </MuiThemeProvider>
        </div>
      )
    }
  }
}

export default PredictedLikes;