import React,  { Component } from 'react';

// import components
import PredictedLikes from './predicted_likes';

// import styling from material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField';

// import styling from antd
import { Select } from 'antd';
const { Option, OptGroup } = Select;

class PredictCaptionLikes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      brand: "",
      text: ""
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(value) {
    console.log(value);
    this.setState({
      brand: value
    })
  }

  handleChange(event, value) {
    console.log(value);
    this.setState({
      text: value
    })
  }

  render() {
    return(
      <div className="caption-body">
      <MuiThemeProvider>
        <div className="caption-body-right">
        <Select
          defaultValue="Choose a Brand"
          style={{ width: 200 }}
          onChange={this.handleClick}
        >
        <Option value="apple">Apple</Option>
        <Option value="samsung">Samsung</Option>
        <Option value="google">Google</Option>
        <Option value="sony">Sony</Option>
        <Option value="nokia">Nokia</Option>
        <Option value="huawei">Huawei</Option>
        </Select>
        </div>

        <TextField
          hintText="Enter Your Caption Here"
          fullWidth={true}
          onChange={this.handleChange}
        />

        {/*To pass retrieved props from API call into PredictedLikes*/}
        <PredictedLikes />
      </MuiThemeProvider>
      </div>
    )
  }
}

export default PredictCaptionLikes;