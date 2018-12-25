import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import routes from '../../config/routers';
class RightMain extends Component{
    render(){
        return(
            <div className="Hui-article">
               {
                    routes.map((item,index)=>(
                        <Route
                            key={index}
                            path={item.path}
                            exact
                            component={item.component}
                        />
                    ))
               }
            </div>
        )
    }
}

export default RightMain