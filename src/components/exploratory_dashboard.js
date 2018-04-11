import React,  { Component } from 'react';

// import chart components
import PhoneStrengths from '../components/exploratory/phone_strengths'

class ExploratoryDashboard extends Component {
  render() {
    return(
      <div>
        ExploratoryDashboard
        <div id="reviews">
          <PhoneStrengths />
        </div>
      </div>
    )
  }
}

export default ExploratoryDashboard;