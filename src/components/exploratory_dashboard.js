import React,  { Component } from 'react';
import axios from 'axios';

// import components
import PhoneStrengths from './exploratory/phone_strengths'
import PhoneWeaknesses from './exploratory/phone_weaknesses';
import SentimentPostsOverTime from './exploratory/sentiment_post_over_time'
import Competitors from './exploratory/competitors'
import BoxPlot from './exploratory/boxplot'

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
      selectedModel: '',
      phoneStrength: [],
      phoneWeakness: [],
      postSentiment: [],
      competitors: []
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
    this.setState({selectedModel: value});
    this.getPhoneStrengthData(value);
    this.getPhoneWeaknessData(value);
    this.getSentimentPostData(value);
    this.getCompetitors(value);
  }

  getPhoneStrengthData = (value) => {
    axios.get(`http://localhost:5132/strengths/${encodeURIComponent(value)}/`)
    .then(response => {
      this.setState({phoneStrength: response.data});
    })
  }

  getPhoneWeaknessData = (value) => {
    axios.get(`http://localhost:5132/weaknesses/${encodeURIComponent(value)}/`)
    .then(response => {
      this.setState({phoneWeakness: response.data});
    })
  }

  getSentimentPostData = (value) => {
    axios.get(`http://localhost:5132/sentiment-post/${encodeURIComponent(value)}/`)
    .then(response => {
      this.setState({postSentiment: response.data});
    })
  }

  getCompetitors = (value) => {
    axios.get(`http://localhost:5132/competitors/${encodeURIComponent(value)}/`)
    .then(response => {
      this.setState({competitors: response.data});
    })
  }



  render() {
    return(
      <div>
      <Select value={this.state.brand} style={{ width: 200 }} onSelect={this.handleBrandSelection}>
      <Option value="Samsung">Samsung</Option>
      <Option value="HTC">HTC</Option>
      <Option value="Google">Google</Option>
      </Select>
      <Select style={{ width: 200 }} value={this.state.selectedModel} onSelect={this.handleModelSelection}>
      {
        this.state.models.map((item) => (
        <Option key={item} value={item}>{item}</Option>
        ))
      }
      </Select>
      <br/>
      <Col span={24}>
      <Card title="Sentiment and Posts Over Time">
          <SentimentPostsOverTime results={this.state.postSentiment}/>
      </Card>
      </Col>
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
        <Row gutter={12}>
          <Col {...colProps} >
          <Card title="Competitors">
              <Competitors results={this.state.competitors} />
          </Card>
          </Col>
          <Col {...colProps} >
          <Card title="Boxplot">
              <BoxPlot results={this.state.competitors} />
          </Card>
          </Col>
          </Row>
      </div>
    )
  }
}

export default ExploratoryDashboard;
