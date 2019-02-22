import React, { Component } from 'react';
import {Layout,Menu,Icon} from 'antd';
import {Link} from "react-router-dom";
import './App.css';
import logo from "./assets/images/top_logo1.png";
const { Header, Sider, Content ,Footer} = Layout;
const SubMenu = Menu.SubMenu;
class SiderDemo extends Component {
  rootSubmenuKeys = ['sub1','sub2','sub3'];
  state = {
    collapsed: false,
    openKeys:['sub1']
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  onOpenChange = (openKeys)=>{
    const latestOpenKey = openKeys.find(key=>this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey)===-1) {
      this.setState({openKeys})
    }else{
      this.setState({
        openKeys:latestOpenKey ? [latestOpenKey] : [],
      })
    }
  }
  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <Menu
            mode="inline"
            openKeys={this.state.openKeys}
            onOpenChange={this.onOpenChange}
            style={{ width: 201 }}
          >
            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>安思利普</span></span>}>
              <Menu.Item key="1"><Link to="/about">微信号 2</Link></Menu.Item>
              <Menu.Item key="2">微信号 2</Menu.Item>
              <Menu.Item key="3">微信号 3</Menu.Item>
              <Menu.Item key="4">微信号 4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>茶氨酸</span></span>}>
              <Menu.Item key="5">微信号 5</Menu.Item>
              <Menu.Item key="6">微信号 6</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="7">微信号 7</Menu.Item>
                <Menu.Item key="8">微信号 8</Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu key="sub4" title={<span><Icon type="setting" /><span>乳胶枕</span></span>}>
              <Menu.Item key="9">微信号 9</Menu.Item>
              <Menu.Item key="10">微信号 10</Menu.Item>
              <Menu.Item key="11">微信号 11</Menu.Item>
              <Menu.Item key="12">微信号 12</Menu.Item>
            </SubMenu>
            <SubMenu key="sub5" title={<span><Icon type="fund" /><span>图表</span></span>}>
              <Menu.Item key="9" to="/">微信号 9</Menu.Item>
              <Menu.Item key="10">微信号 10</Menu.Item>
              <Menu.Item key="11">微信号 11</Menu.Item>
              <Menu.Item key="12">微信号 12</Menu.Item>
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
          <Content style={{
            margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
          }}
          >
            Content
          </Content>
          <Footer style={{background:'#fff',padding:0}}>
            版权
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
export default SiderDemo
