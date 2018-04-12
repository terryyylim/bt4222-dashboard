import React, { Component } from 'react';

class LandingPage extends Component {
  goToDashboard() {
    window.location = '/dashboard'
  }

  render() {
    return(
      <div className="landing">
        <div className="centered">Phoneylytics
          <div className="tagline">The Best Mobile Analytics Platform</div>
          <div className="landingbutton" onClick={this.goToDashboard}>Dashboard</div>
        </div>
      </div>
    )
  }
}

export default LandingPage;