/**
 * Create by duxin on 2019/3/7
 */

 import * as type from './style';
 import * as http from '../action/index.js';

 const requestData = category=>({
     type:type.REQUEST_DATA,
     category
 });

 export const receiveData = (data,category)=>({
     type:type.RECEIVE_DATA,
     data,
     category
 });

 /**
  * 请求数据调用方法
  * @param funName  请求接口函数名
  * @param param  请求接口参数
  */

export const fetchData = ({funName,param,stateName})=>dispatch=>{
    !stateName && (stateName = funName);
    dispatch(requestData(stateName));
    return http[funName](param).then(res=>dispatch(receiveData(res,stateName)));
}