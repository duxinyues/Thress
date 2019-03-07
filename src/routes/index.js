/**
 * Create by duxin on 2019/3/7
 */

import React,{Component} from 'react';
import {Route,Redirect,Switch} from 'react-router-dom';
import AllComponents from '../components';

import routesConfig from './config';
import queryString from 'query-string';
export default class CRouter extends Component{
    requireAuth = (permission,component)=>{
        const {auth} = this.props;
        const {permission} = auth.data;
        if (!permission || !permission.includes(permission)) {
            return <Redirect to={'404'} />
        }
        return component;
    };
    requireLogin = (component,permission)=>{
        const {auth} = this.props;
        const {permission} = auth.data;
        if (process.env.NODE_ENV === 'production' && !permission) {
            return <Redirect to={'/login'} />;
        }
        return permission ? this.requireAuth(permission,component) : component;
    };
    render(){
        const {onRouterChange} = this.props;
        return(
            <Switch>
               {
                   Object.keys(routesConfig).map(key=>
                    routesConfig[key].map(r=>{
                        const route = r =>{
                            const Component = AllComponents[r.component];
                            return (
                                <Route
                                    key={r.route || r.key}
                                ></Route>
                            )
                        }
                    })
                   )
               }
            </Switch>
        )
    }
}