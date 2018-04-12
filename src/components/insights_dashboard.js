import React,  { Component } from 'react';

// import components
import PhoneWeaknesses from './exploratory/phone_weaknesses';

// import styling from antd
import { Card } from 'antd';

class InsightsDashboard extends Component {
  render() {
    return(
      <div>
        <div className="chart-display col-sm-4">
        <Card title="Phone Weaknesses" style={{ width: 600 }}>
            <PhoneWeaknesses />
        </Card>
        </div>

        <div className="chart-display col-sm-4">
        <Card title="Phone Weaknesses" style={{ width: 600 }}>
            <PhoneWeaknesses />
        </Card>
        </div>
      </div>
    )
  }
}

export default InsightsDashboard;
