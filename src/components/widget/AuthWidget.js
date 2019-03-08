/**
 * Create By duxin on 2019
 * 权限部件
 */
import {Component} from 'react';
import {connect} from 'react-redux';

class AuthWidgst extends Component{
    render(){
        return this.props.children(this.props.data || {});
    }
}

const mapStateToProps = state => {
    const {auth={data:{}}} = state.httpData;
    return {auth};
}

export  default connect(mapStateToProps)(AuthWidgst);
