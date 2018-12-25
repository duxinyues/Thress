import React, { Component } from 'react';
import {Layout} from 'antd';
import Header from '../../components/Header';
import SiderNav from '../../components/SiderNav';
import RightMain from '../../components/RightMain'
class Home extends Component{
    render() {
      return (
       <Layout>
           <Header />
           <Layout className="cl Hui-main">
                <SiderNav />
                <RightMain />
           </Layout>
       </Layout>
      )
    }
}
export default Home 