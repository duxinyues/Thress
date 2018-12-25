import React, { Component } from 'react';
import {Icon} from 'antd';
import Cookies from 'js-cookie';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ROOT_action from '../../store/root/action'
class Header extends Component {
  componentWillMount(){
    let { ROOT_userInfo, ROOT_ChangeUser } = this.props
    if (ROOT_userInfo.name === '') {
      ROOT_ChangeUser({ name: Cookies.get('userName') })
    }
  }
  logout = ()=>{
    Cookies.remove('JSESSIONID', { path: '/' })
    Cookies.remove('userName',{path:'/'})
    this.props.history.replace('/login')
  }
  render() {
    const {name}=this.props.ROOT_userInfo
    return (
        <header className="Hui-header cl"> 
            <span className="Hui-logo l">数据管理中心</span> 
            <span className="Hui-userbox">
                <span className="c-white">管理员:{name}</span>
          <span className="btn btn-danger radius ml-10" title="退出" onClick={this.logout}><Icon type="poweroff" /> 退出</span>
            </span> 
		</header>
    )
  }
}
export default withRouter(connect(
  state => ({ ...state.ROOT }),
  dispatch => bindActionCreators({ ...ROOT_action }, dispatch)
)(Header))
