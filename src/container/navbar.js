import React,  { Component } from 'react';
import { Menu, Icon } from 'antd';
import ExploratoryDashboard from '../components/exploratory_dashboard';
import PredictCaptionDashboard from '../components/predict_caption_dashboard';
import InsightsDashboard from '../components/insights_dashboard';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 'exploratory'
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    console.log(event.key);
    this.setState({
      current: event.key
    })
  }

  render() {
    if (this.state.current === "") {
      return(
        <span>
          <Menu
            theme="dark"
            onClick={this.handleClick}
            defaultSelectedKeys={['exploratory']}
            style={{ lineHeight: '50px' }}
            mode="horizontal"
          >
        <Menu.Item key="menu">
            <Icon type="shake"  /> Phoneylytics
          </Menu.Item>
          <Menu.Item key="exploratory">
            <Icon type="appstore" />Exploratory
          </Menu.Item>
          <Menu.Item key="insights">
            <Icon type="dot-chart" />Modeling Insights
          </Menu.Item>
          <Menu.Item key="caption">
            <Icon type="bar-chart" />Caption Prediction
          </Menu.Item>
          </Menu>
        </span>
      )
    } else if (this.state.current === "exploratory") {
      return(
        <div>
        <Menu
          theme="dark"
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          style={{ lineHeight: '50px' }}
          mode="horizontal"
        >
        <Menu.Item key="menu">
          <Icon type="shake"  /> Phoneylytics
        </Menu.Item>
          <Menu.Item key="exploratory">
            <Icon type="appstore" />Exploratory
          </Menu.Item>
          <Menu.Item key="insights">
            <Icon type="dot-chart" />Modeling Insights
          </Menu.Item>
          <Menu.Item key="caption">
            <Icon type="bar-chart" />Caption Prediction
          </Menu.Item>
        </Menu>
        <div id="review">
          <ExploratoryDashboard />
        </div>
        </div>
      )
    } else if (this.state.current === "insights") {
      return(
        <div>
        <Menu
          theme="dark"
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          style={{ lineHeight: '50px' }}
          mode="horizontal"
        >
        <Menu.Item key="menu">
          <Icon type="shake"  /> Phoneylytics
        </Menu.Item>
        <Menu.Item key="exploratory">
          <Icon type="appstore" />Exploratory
        </Menu.Item>
        <Menu.Item key="insights">
          <Icon type="dot-chart" />Modeling Insights
        </Menu.Item>
        <Menu.Item key="caption">
          <Icon type="bar-chart" />Caption Prediction
        </Menu.Item>
        </Menu>
        <InsightsDashboard />
        </div>
      )
    } else if (this.state.current === "caption") {
      return(
        <div>
        <Menu
          theme="dark"
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          style={{ lineHeight: '50px' }}
          mode="horizontal"
        >
        <Menu.Item key="menu">
          <Icon type="shake"  /> Phoneylytics
        </Menu.Item>
        <Menu.Item key="exploratory">
          <Icon type="appstore" />Exploratory
        </Menu.Item>
        <Menu.Item key="insights">
          <Icon type="dot-chart" />Modeling Insights
        </Menu.Item>
        <Menu.Item key="caption">
          <Icon type="bar-chart" />Caption Prediction
        </Menu.Item>
        </Menu>
        <PredictCaptionDashboard />
        </div>
      )
    } else {
      return null;
    }
  }
}

export default NavBar;
