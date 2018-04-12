import React,  { Component } from 'react';

// import components
import PredictedLikes from './predicted_likes';

// import styling from antd
import { Input } from 'antd';
import { Select } from 'antd';
const { TextArea } = Input;
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

  handleChange(event, index, value) {
    console.log(event);
    console.log(value);
    console.log(index);
    this.setState({
      text: value
    })
  }

  render() {
    return(
      <div>
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

        <TextArea rows={6} onPressEnter={this.handleChange} />

        {/*To pass retrieved props from API call into PredictedLikes*/}
        <PredictedLikes />
      </div>
    )
  }
}

export default PredictCaptionLikes;