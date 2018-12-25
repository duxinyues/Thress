import React ,{Component} from 'react';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import Routers from './routes';
import store from './store';

class App extends Component{
    render(){
        return(
            <Provider store={store}>
                <HashRouter>
                    <Routers/>
                </HashRouter>
            </Provider>
        )
    }
}
export default App