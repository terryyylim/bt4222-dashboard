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
          <div className="facebook-border">
            <div className="border-body">
              <i className="fa fa-facebook-square"></i> 
              <div className="social-media">Facebook</div>
              {this.props.facebook.count} Likes
            </div>
          </div>
          <div className="instagram-border">
            <div className="border-body">
              <i className="fa fa-instagram"></i> 
              <div className="social-media">Instagram</div>
              {this.props.instagram.count} Likes
            </div>
          </div>
          <div className="twitter-border">
            <div className="border-body">
              <i className="fa fa-twitter-square"></i> 
              <div className="social-media">Twitter</div>
              {this.props.twitter.count} Retweets
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="caption-chart">
          <div className="caption-chart-default">
          <div className="default-caption-header">Social Media Prediction Status</div>
          Choose Your Brand & Enter Your Caption!
          </div>
        </div>
      )
    }
  }
}

export default PredictedLikes;