import React from 'react'
import './index.css'
import Home from "./home";
import Goods from'./goods'
class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bodyContent: () => {
        const params = {
          '1': <Home />,
          '2-1': <Goods />,
          '2-2': '品类管理',
          '3-1': '订单管理',
          '3-2': '退换货管理',
          '4-1': 'Tom',
          '4-2': 'Bill',
          '4-3': 'Alex',
        }
        switch (this.props.currentMenu) {
          case '1':
            return params[this.props.currentMenu]
          case '2-1':
            return params[this.props.currentMenu]
          case '2-2':
            return params[this.props.currentMenu]
          case '3-1':
            return params[this.props.currentMenu]
          default:
            break;
        }
      }
    }
  }
  render() {
    return (
      <div className='main_content'>
       {
         this.state.bodyContent()
       }
      </div>
    )
  }
}

export default Body;