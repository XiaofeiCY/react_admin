import React from 'react';
import './App.css';
// import Banner from './pages/banner';
import Body from './pages/body';
import 'antd/dist/antd.css';
import { Layout, Menu, Icon } from 'antd';
import titleImg from "../static/imgs/title.png";
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
    currentMenu: '1'
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  currentMenu(item) {
    this.setState({
      currentMenu: item.key
    })
    console.log('======', item);
  }
  render() {
    return (
      <Layout className='main_content'>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" style={{
            backgroundImage: "url(" + titleImg +")"
          }} />
          <Menu theme = "dark"
          mode = "inline"
          defaultSelectedKeys = {
            ['1']
          }
          onClick = {
            (item) => {
              this.currentMenu(item)
            }
          }>
            <Menu.Item key="1">
              <i className='iconfont iconCYshouye1 more_iconcss'></i>
              <span className={this.state.collapsed ? 'hide_span' : ''}>首页</span>
            </Menu.Item>
            <SubMenu
              key="2"
              title={
                <span>
                  <i className='iconfont iconCYgoods more_iconcss'></i>
                  <span className={this.state.collapsed ? 'hide_span' : ''}>商品</span>
                </span>
              }
            >
              <Menu.Item key="2-1">商品管理</Menu.Item>
              <Menu.Item key="2-2">品类管理</Menu.Item>
            </SubMenu>
            <SubMenu
              key="3"
              title={
                <span>
                  <i className='iconfont iconCYdingdan more_iconcss'></i>
                  <span className={this.state.collapsed ? 'hide_span' : ''}>订单</span>
                </span>
              }
            >
              <Menu.Item key="3-1">订单管理</Menu.Item>
              <Menu.Item key="3-2">退换货管理</Menu.Item>
            </SubMenu>
            <SubMenu
              key="4"
              title={
                <span>
                  <i className='iconfont iconCYyonghu more_iconcss'></i>
                  <span className={this.state.collapsed ? 'hide_span' : ''}>用户</span>
                </span>
              }
            >
              <Menu.Item key="4-1">Tom</Menu.Item>
              <Menu.Item key="4-2">Bill</Menu.Item>
              <Menu.Item key="4-3">Alex</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            <Body currentMenu ={this.state.currentMenu}></Body>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;