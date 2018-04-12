import React,  { Component } from 'react';

// import components
import PredictCaptionLikes from './caption/predict_caption'

// import antd components

class PredictCaptionDashboard extends Component {
  render() {
    return(
      <div>
      <div className="caption-head">
        Press 'Enter' after typing Caption to Predict Likes!
      </div>
      <div className="caption-body">
        <PredictCaptionLikes />
      </div>
      </div>
    )
  }
}

export default PredictCaptionDashboard;
