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
      selectedBrand: false,
      results: []
    }
    this.handleBrandMenuClick = this.handleBrandMenuClick.bind(this)
    this.handleBrandSelection = this.handleBrandSelection.bind(this)
  }

  handleBrandMenuClick(event) {
    console.log(event.key);
    this.setState({
      brand: event.key,
      selectedBrand: true
    })
    this.handleBrandSelection(event.key);
  }

  handleBrandSelection(value) {
    axios.get('http://localhost:5132/model/' + encodeURIComponent(value))
    .then(response => {
      this.setState({models: response.data});
    })
  }

  handleModelMenuClick(event){
    console.log(event.key);
    this.setState({
      selectedModel: event.key
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
    console.log(brandmenu);
    console.log(this.state.selectedBrand);
    if (this.state.selectedBrand === false) {
      return(
        <div>
        <Dropdown overlay={brandmenu}>
          <Button style={{ marginLeft: 8 }}>
            Choose A Brand <Icon type="down" />
          </Button>
        </Dropdown>
        <Dropdown disabled overlay={brandmenu}>
        <Button style={{ marginLeft: 8 }}>
          No Brand Chosen <Icon type="down" />
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
    } else if (this.state.selectedBrand === true) {
      const models = []
      const modelmenu = {models: this.state.models.map((name, index) => (
        <Menu.Item key={name} value={name} />
      ))}
      for (var mod=0; mod < modelmenu['models'].length; mod++) {
        models.push(modelmenu['models'][mod]['key'])
      }
      console.log(models);

      const allmodels = (
        <Menu onClick={this.handleModelMenuClick}>
          this.state.models.map(window.name => <Menu.Item key={window.name}>{window.name}</Menu.Item>)
          {/* models.map(window.name => <Menu.Item key={window.name}>{window.name}</Menu.Item>) */}
        </Menu>
        )
      //var wanted = models.map(name => (console.log(name)));
      console.log(allmodels);
    
    return(
      <div>
      <Dropdown overlay={brandmenu}>
        <Button style={{ marginLeft: 8 }}>
          Choose A Brand <Icon type="down" />
        </Button>
      </Dropdown>
      <Dropdown overlay={allmodels}>
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
}

export default ExploratoryDashboard;
