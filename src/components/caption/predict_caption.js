import React,  { Component } from 'react'
import axios from 'axios'

// import components
import PredictedLikes from './predicted_likes';

// import styling from material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import { blue50, blueA100 } from 'material-ui/styles/colors'

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
  inputTextStyle: {
    color: blue50
  }
};

class PredictCaptionLikes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      brand: "",
      text: "",
      prediction: []
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit() {
    console.log(this.state.brand)
    console.log(this.state.text)
    const url = 'http://localhost:5132/predict/'
    axios.post(url, {
      brand: this.state.brand,
      caption: this.state.text
    })
    .then(response => {
      this.setState({prediction: response.data});
    })
  }

  render() {
    console.log(this.state.prediction);
    return(
      <div className="caption-body">
      <MuiThemeProvider>
        <div className="caption-body-right">
        <Select
          defaultValue="Choose a Brand"
          style={{ width: 200 }}
          onChange={this.handleClick}
        >
        <Option value="Apple">Apple</Option>
        <Option value="Samsung">Samsung</Option>
        <Option value="Google">Google</Option>
        <Option value="Sony">Sony</Option>
        <Option value="Nokia">Nokia</Option>
        <Option value="Huawei">Huawei</Option>
        </Select>
        </div>

        <TextField
          floatingLabelText="Enter Your Caption Here"
          underlineFocusStyle={styles.underlineStyle}
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          inputStyle={styles.inputTextStyle}
          fullWidth={true}
          onChange={this.handleChange}
        />
        <br/> <br/>
        <div className="landingbutton" onClick={this.handleSubmit}>Get Prediction!</div>
        {/*To pass retrieved props from API call into PredictedLikes*/}
        <PredictedLikes facebook={this.state.prediction[0]} instagram={this.state.prediction[1]} twitter={this.state.prediction[2]}/>
      </MuiThemeProvider>
      </div>
    )
  }
}

export default PredictCaptionLikes;
