import React,  { Component } from 'react';
import axios from 'axios';

// import components
import PhoneStrengths from './exploratory/phone_strengths'
import PhoneWeaknesses from './exploratory/phone_weaknesses';

// import styling components
import { Menu, Dropdown, Button, Icon, Row, Col, Card } from 'antd';

const colProps = {
  lg: 12,
  md: 12,
}

class ExploratoryDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      brand: '',
      models: [],
      selectedModel: '',
      results: []
    }
    this.handleBrandMenuClick = this.handleBrandMenuClick.bind(this)
    this.handleBrandSelection = this.handleBrandSelection.bind(this)
  }

  handleBrandMenuClick(event) {
    console.log(event.key);
    this.setState({
      brand: event.key
    })
    this.handleBrandSelection(event.key);
  }

  handleBrandSelection(value) {
    axios.get('http://localhost:5132/model/' + encodeURIComponent(value))
    .then(response => {
      this.setState({models: response.data});
    })
  }

  render() {
    const brandmenu = (
      <Menu onClick={this.handleBrandMenuClick}>
        <Menu.Item key="Apple">Apple</Menu.Item>
        <Menu.Item key="Samsung">Samsung</Menu.Item>
        <Menu.Item key="Sony">Sony</Menu.Item>
      </Menu>
    );

    const modelmenu = {models: this.state.models.map((name, index) => (
      <Menu.Item key={name} value={name} />
    ))}

    console.log(modelmenu);
    console.log(modelmenu['models'])
    //console.log((modelmenu['models']['0']).key)
    //console.log(modelmenu['models']['0']['props'])
    //console.log(modelmenu['models'][0].props['value'])
    console.log(modelmenu['models'][1])
    return(
      <div>
      <Dropdown overlay={brandmenu}>
        <Button style={{ marginLeft: 8 }}>
          Choose A Brand <Icon type="down" />
        </Button>
      </Dropdown>
      <br/>
      <Row gutter={12}>
        <Col {...colProps} >
        <Card title="Phone Strengths">
            <PhoneStrengths />
        </Card>
        </Col>
        <Col {...colProps}  >
        <Card title="Phone Weaknesses">
            <PhoneWeaknesses />
        </Card>
        </Col>
        </Row>
      </div>
    )
  }
}

export default ExploratoryDashboard;
