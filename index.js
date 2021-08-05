/*
 * @Author: yongyuan at <yongyuan253015@gmail.com>
 * @Date: 2021-08-05 22:37:45
 * @LastEditTime: 2021-08-05 22:38:36
 * @LastEditors: yongyuan at <yongyuan253015@gmail.com>
 * @Description: 
 * @FilePath: \nodeJS\index.js
 * 
 */
const http = require('http');
// 创建HTTP服务
const server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' })
    response.end("hello worle!");
});
server.listen(8080);

console.log("dvdfb")
