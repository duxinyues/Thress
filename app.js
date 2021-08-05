/*
 * @Author: yongyuan at <yongyuan253015@gmail.com>
 * @Date: 2021-08-05 22:48:27
 * @LastEditTime: 2021-08-05 23:07:19
 * @LastEditors: yongyuan at <yongyuan253015@gmail.com>
 * @Description: 项目主体js文件
 * @FilePath: \nodeJS\app.js
 * 
 */


const express = require("express");
const app = express();
const arr = [
    { id: 1, value: 8, done: false, delete: false },
    { id: 2, value: 43, done: false, delete: false },
    { id: 3, value: 3, done: false, delete: false }
]
app.all('*', (req, res, next) => {
    // 允许跨域，*表示允许任意域名跨域
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "content-type");
    res.header('Access-Control-Allow-Methods', "DELETE,PUT,POST,GET,OPTTONS");
    next()
})
app.get("/todoList", (req, res) => {
    res.send(arr)
});

app.listen(8080, () => {
    console.log("服务启动了")
})