// 可以直接node选择node-http-server快速初始化服务器
const http = require('http');
http.createServer(function (request, response) {

    console.log(req.url);//url

    // writeHead设置响应头
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('');
    // end表示输出一句话，并且结束响应,结束响应必须有
    response.end('Hello World');
}).listen(8081); // 端口

console.log('Server running at http://127.0.0.1:8081/');