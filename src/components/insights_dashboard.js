import React,  { Component } from 'react';

// import components
import FacebookFeature from './insights/facebook_feature'
import InstagramFeature from './insights/instagram_feature'
import AndroidCentralFeature from './insights/androidcentral_feature'
import XdaFeature from './insights/xda_feature'

// import styling components
import {Row, Col, Card } from 'antd';

const colProps = {
  lg: 11,
  md: 11,
}

const cardstyle = {
  backgroundColor: '#F5DEB3'
}

class InsightsDashboard extends Component {
  render() {
    return(
      <div className="body-bg">
        <Row gutter={10}>
          <Col {...colProps} >
          <Card className="ant-card-head" style={cardstyle} title="Facebook Features" >
            <FacebookFeature brand={"Samsung"} model={"Samsung Galaxy S7"} />
          </Card>
          </Col>
          <Col {...colProps}  >
          <Card className="ant-card-head" style={cardstyle} title="Instagram Features">
            <InstagramFeature />
          </Card>
          </Col>
        </Row>
        <Row gutter={10}>
          <Col {...colProps} >
          <Card className="ant-card-head" style={cardstyle} title="AndroidCentral Features">
            <AndroidCentralFeature />
          </Card>
          </Col>
          <Col {...colProps}  >
          <Card className="ant-card-head" style={cardstyle} title="Xda Features">
            <XdaFeature />
          </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default InsightsDashboard;
