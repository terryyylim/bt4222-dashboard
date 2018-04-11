import React,  { Component } from 'react';

// import components
import PhoneStrengths from './exploratory/phone_strengths'
import PhoneWeaknesses from './exploratory/phone_weaknesses';

// import styling from antd
import { Card } from 'antd';

class InsightsDashboard extends Component {
  render() {
    return(
      <div>
        <div className="chart-display col-sm-4">
        <Card title="Phone Weaknesses" style={{ width: 600 }}>
          <p>
            <PhoneWeaknesses />
          </p>
        </Card>
        </div>

        <div className="chart-display col-sm-4">
        <Card title="Phone Weaknesses" style={{ width: 600 }}>
          <p>
            <PhoneWeaknesses />
          </p>
        </Card>
        </div>
      </div>
    )
  }
}

export default InsightsDashboard;