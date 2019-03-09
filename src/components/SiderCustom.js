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
    static getDerivedStateFromProps(props, state) {
        if(props.collapsed !== state.collapsed){
            

        }
    }

    static setMenuOpen = props =>{
        const {pathname} = props.location;
        return {
            openKey:pathname.substr(0,pathname.lastIndexOf('/')),
            selectedKey:pathname
        };
    }

    static onCollapse = (collapsed)=>{
        return {
            collapsed,
            mode:collapsed ? 'vertical' : 'inline',
        };
    }
    state = {
        collapsed:false,
        mode:'inline',
        openKey:'',
        selectedKey:'',
        firstHide:true,
    }
    
    componentDidMount(){
        const state = SiderCustom.setMenuOpen(this.props);
        this.setState(state);
    }
    menuClick = e =>{
        this.setState({
            selectedKey:e.key
        });
        console.log(this.state);
        const {popoverHide} = this.props;
        popoverHide && popoverHide();
    }
    openMenu = v =>{
        this.setState({
            openKey:v[v.length-1],
            firstHide:false,
        })
    }
    render(){
        return(
            <Sider
                trigger={null}
                breakpoint='lg'
                collapsed={this.props.collapsed}
                style={{overflowY:'auto'}}
            >
                <div className="logo" />
                <SiderMenu
                    menus={routes.menus}
                    onclick={this.menuClick}
                    mode="inline"
                    selectedKeys={[this.state.selectedKey]}
                    openKeys={this.state.firstHide ? null : [this.state.openKey]}
                    onOpenChange={this.openMenu}
                />
                <style>
                    {
                        `
                        #nprogress .spinner{
                            left:${this.state.collapsed ? '70px' : '206px'};
                            right: 0 !important;
                        }
                        `
                    }
                </style>
            </Sider>
        )
    }
 }

 export  default withRouter(SiderCustom)