import React,  { Component } from 'react';
import { Row, Col, Card, Button } from 'antd'

// import components
import PhoneStrengths from './exploratory/phone_strengths'
import PhoneWeaknesses from './exploratory/phone_weaknesses';

const colProps = {
  lg: 12,
  md: 12,
}


class ExploratoryDashboard extends Component {
  render() {
    return(
      <div>
      <br/>
      <Row gutter={12}>
        <Col {...colProps} >
        <Card title="Phone Strengths">
          <p>
            <PhoneStrengths />
          </p>
        </Card>
        </Col>
        <Col {...colProps}  >
        <Card title="Phone Weaknesses">
          <p>
            <PhoneWeaknesses />
          </p>
        </Card>
        </Col>
        </Row>
      </div>
    )
  }
}

export default ExploratoryDashboard;
