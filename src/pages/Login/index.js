import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import  CryptoJS from 'crypto-js';
import FormBox from './FromBox';
import Cookies from 'js-cookie';
import * as action from './store/action';
import * as ROOT_action from '../../store/root/action';
// import GVrify from '../../utils/gVerify';
import '../../assets/css/H-ui.login.css';
class Login extends Component {
   
  
    submit = (form)=>{
        form.validateFields((err,values)=>{
            if (!err) {
                this.timer = setTimeout(()=>{
                    let { userName, password} = values;
                    if (userName === 'aaa' && password === '123') {
                        let message = `M&${userName}&${password}`
                        let key = 'react-starter'
                        let session = CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA1(message,key))
                        Cookies.set('JSESSIONID',session,{expires:1,path:'/'});
                        Cookies.set('userName',userName,{expires:1,path:'/'});
                        this.props.ROOT_ChangeUser({name:userName})
                        this.props.history.push('/home')
                    }else{
                        alert("账号或是密码错误！")
                        console.log("账号或是密码错误！");
                    }
                },0.1)
            }
        })
    }
    componentWillUnmount(){
        clearTimeout(this.timer)
    }
    render() {
        return (
            <div className="loginWraper">
                <div id="loginform" className="loginBox">
                    <FormBox submit={this.submit} {...this.props}/>
                    <div className="footer">欢迎登陆后台内容管理</div>
                </div>
            </div>
        )
    }
}
export default connect(
    state =>({...state.Login}),
    dispatch=>bindActionCreators({...ROOT_action,...action},dispatch)
)(Login)