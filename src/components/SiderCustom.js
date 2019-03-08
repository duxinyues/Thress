/**
 * Create by duxin on 2019/3/8
 */

 import React,{Component} from 'react';
 import {Layout} from 'antd';
 import {withRouter} from 'react-router-dom';
 import routes from '../routes/config';
 import SiderMenu from './SiderMenu';


 const {Sider} = Layout;

 class SiderCustom extends Component{
    
    render(){
        return(
            <p/>
        )
    }
 }

 export  default withRouter(SiderCustom)