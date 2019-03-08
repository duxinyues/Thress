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
                                    exact
                                    path={r.route || r.key}
                                    render={props=>{
                                        //匹配？以及其后的字符串
                                        const reg = /\?\S*/g;
                                        //除去？参数
                                        const queryParams = window.location.hash.match(reg); 
                                        const {params} = props.match;
                                        Object.keys(params).forEach(key=>{
                                            params[key] = params[key] && params[key].replace(reg,'');
                                        });
                                        props.match.params = {...params};
                                        const merge = {...props,query:queryParams ? queryString.parse(queryParams[0]):{}}
                                        onRouterChange && onRouterChange(r);
                                        return r.login ? <Component {...merge} /> : this.requireLogin(<Component {...merge} />,r.auth)
                                    }}
                                />
                            )
                        }
                        return r.component ? route(r) : r.subs.map(r=> route(r));
                    })
                   )
               }
               <Route render={()=><Redirect to="/404" />} />
            </Switch>
        )
    }
}