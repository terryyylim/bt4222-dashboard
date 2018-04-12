import React, { Component } from 'react';

class LandingPage extends Component {
  goToDashboard() {
    window.location = '/dashboard'
  }

  render() {
    return(
      <div className="landing">
        <div className="centered">Phoneylytics
          <div className="tagline">Powering Phone Analytics</div>
          <div className="landingbutton" onClick={this.goToDashboard}>Dashboard</div>
        </div>
      </div>
    )
  }
}

export default LandingPage;
