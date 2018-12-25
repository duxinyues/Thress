import {combineReducers} from 'redux'
import ROOT from './root/reducer';
import Login from '../pages/Login/store/reducer';

const reducers = combineReducers({
    ROOT,
    Login
})

export default reducers