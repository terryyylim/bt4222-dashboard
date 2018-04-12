import React,  { Component } from 'react';

// import components
import PredictedLikes from './predicted_likes';

// import styling from material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField';
import { blue50, blueA100 } from 'material-ui/styles/colors';

// import styling from antd
import { Select } from 'antd';
const { Option, OptGroup } = Select;

const styles = {
  errorStyle: {
    color: blue50
  },
  underlineStyle: {
    borderColor: blueA100
  },
  floatingLabelStyle: {
    color: blue50
  },
  floatingLabelFocusStyle: {
    color: blue50
  },
};

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
          floatingLabelText="Enter Your Caption Here"
          underlineFocusStyle={styles.underlineStyle}
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
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