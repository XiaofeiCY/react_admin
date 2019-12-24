import React from "react";
import './index.css';
import {
  DatePicker
} from 'antd';

class Banner extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    return ( <div><DatePicker/></div>)
  }
}

export default Banner