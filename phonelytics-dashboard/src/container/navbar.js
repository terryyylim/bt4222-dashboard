import React,  { Component } from 'react';
import { Menu, Icon } from 'antd';
import ExploratoryDashboard from '../components/exploratory_dashboard';
import PredictCaptionDashboard from '../components/predict_caption_dashboard';
import InsightsDashboard from '../components/insights_dashboard';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: ''
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
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="exploratory">
            <Icon type="mail" />Exploratory
          </Menu.Item>
          <Menu.Item key="insights">
            <Icon type="appstore" />Modeling Insights
          </Menu.Item>
          <Menu.Item key="caption">
            <Icon type="appstore" />Caption Prediction
          </Menu.Item>
        </Menu>
      )
    } else if (this.state.current === "exploratory") {
      return(
        <div>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="exploratory">
            <Icon type="mail" />Exploratory
          </Menu.Item>
          <Menu.Item key="insights">
            <Icon type="appstore" />Modeling Insights
          </Menu.Item>
          <Menu.Item key="caption">
            <Icon type="appstore" />Caption Prediction
          </Menu.Item>
        </Menu>
        <ExploratoryDashboard />
        </div>
      )
    } else if (this.state.current === "insights") {
      return(
        <div>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="exploratory">
            <Icon type="mail" />Exploratory
          </Menu.Item>
          <Menu.Item key="insights">
            <Icon type="appstore" />Modeling Insights
          </Menu.Item>
          <Menu.Item key="caption">
            <Icon type="appstore" />Caption Prediction
          </Menu.Item>
        </Menu>
        <InsightsDashboard />
        </div>
      )
    } else if (this.state.current === "caption") {
      return(
        <div>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="exploratory">
            <Icon type="mail" />Exploratory
          </Menu.Item>
          <Menu.Item key="insights">
            <Icon type="appstore" />Modeling Insights
          </Menu.Item>
          <Menu.Item key="caption">
            <Icon type="appstore" />Caption Prediction
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