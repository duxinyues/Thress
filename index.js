/*
 * @Author: yongyuan at <yongyuan253015@gmail.com>
 * @Date: 2021-08-05 22:37:45
 * @LastEditTime: 2021-08-06 21:38:24
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

const fs = require('fs');
fs.readFile("./test.txt", { "encoding": "utf8" }, function (err, data) {
    if (err) {
        console.log(err);
        return
    }
    console.log(data)
})

console.log("read async")