import React from 'react'
import {Route,Redirect} from 'react-router-dom';
import {isAuthenticated} from '../../utils/Session';

const PrivateRoute = ({component:Component,...rest})=>{
    <Route 
        {...rest}
        render={
            (props)=>{
                if(!!isAuthenticated()){
                    <Component {...props} />
                }else{
                    <Redirect 
                    to={{
                        pathname:'/login',
                        state:{from:props.location}
                    }}
                />
                }
            }
        }
    />
}
export default PrivateRoute
