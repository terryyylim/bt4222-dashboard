import React,  { Component } from 'react';
import axios from 'axios';

// import components
import PhoneStrengths from './exploratory/phone_strengths'
import PhoneWeaknesses from './exploratory/phone_weaknesses';
// import SentimentPostsOverTime from './exploratory/sentiment_post_over_time'

// import styling components
import { Row, Col, Card, Select } from 'antd';
const Option = Select.Option;


const colProps = {
  lg: 12,
  md: 12,
}

class ExploratoryDashboard extends Component {

    state = {
      brand: 'Samsung',
      models: [],
      phoneStrength: [],
      PhoneWeakness: []
    }

  handleBrandSelection = (value) => {
    this.setState({
      brand: value
    });
    axios.get('http://localhost:5132/model/' + encodeURIComponent(value))
    .then(response => {
      this.setState({models: response.data});
    })
  }

  handleModelSelection = (value) => {
    console.log(value);
    this.getPhoneStrengthData(value);
    this.getPhoneWeaknessData(value);
  }

  getPhoneStrengthData = (value) => {
    axios.get(`http://localhost:5132/strengths/${encodeURIComponent(value)}/`)
    .then(response => {
      this.setState({phoneStrength: response.data});
      console.log(response.data);
    })
  }

  getPhoneWeaknessData = (value) => {
    axios.get(`http://localhost:5132/weaknesses/${encodeURIComponent(value)}/`)
    .then(response => {
      this.setState({PhoneWeakness: response.data});
    })
  }

  render() {
    return(
      <div>
      <Select value={this.state.brand} style={{ width: 120 }} onSelect={this.handleBrandSelection}>
      <Option value="Samsung">Samsung</Option>
      <Option value="HTC">HTC</Option>
      <Option value="Google">Google</Option>
      </Select>
      <Select style={{ width: 120 }} value={this.state.models ? this.state.models[0] : ""} onSelect={this.handleModelSelection}>
      {
        this.state.models.map((item) => (
        <Option key={item} value={item}>{item}</Option>
        ))
      }
      </Select>
      <br/>
      <Row gutter={12}>
        <Col {...colProps} >
        <Card title="Phone Strengths">
            <PhoneStrengths results={this.state.phoneStrength} />
        </Card>
        </Col>
        <Col {...colProps}  >
        <Card title="Phone Weaknesses">
            <PhoneWeaknesses results={this.state.phoneWeakness} />
        </Card>
        </Col>
        </Row>
      </div>
    )
  }
}

export default ExploratoryDashboard;
