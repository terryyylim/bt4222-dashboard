import React,  { Component } from 'react';

// import components
import PredictCaptionLikes from './caption/predict_caption'

// import antd components

class PredictCaptionDashboard extends Component {
  render() {
    return(
      <div className="body-bg">
        <div className="caption-body">
          <PredictCaptionLikes />
        </div>
      </div>
    )
  }
}

export default PredictCaptionDashboard;
