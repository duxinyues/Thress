/**
 * Create by duxin on 2019/3/7
 * http通用工具函数
 */
import axios from 'axios';
import {message} from 'antd';

/**
 * 公共的get请求
 * @param url 接口地址
 * @param msg  接口异常提示
 * @param header 接口所用的header配置
 */

 export const get = ({url,msg="接口异常",header})=>{
     axios.get(url,header).then(res=>res.data).catch(err=>{
         console.log(err);
         message.warn(msg);
     });
 }
 
 /**
  * 公共的post请求
  * @param url  接口地址
  * @param data 接口参数
  * @param msg  接口异常提示
  * @param header 接口所用的header配置
  */

  export const post = ({url,data,msg='接口异常'},header)=>{
      axios.post(url,data,header).then(res=>res.data).catch(
          err=>{
              console.log(err);
              message.warn(msg);
          }
      )
  }