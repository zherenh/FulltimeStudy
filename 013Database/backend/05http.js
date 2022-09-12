//http模块
const http = require("http");
const moduleRender = require("./06module")

// 必须配置 type:commonjs在package.json。里面才能运行
//两个参数
// const server = http.createServer((req,res)=>{
const server = http.createServer();
server.on("request",(req,res)=>{
    //req接收浏览器传的参数
    //res返回渲染内容
    console.log(req.url);
    // 表示处理不了直接return  
    if(req.url === "/favicon.ico"){
        return
    }

    // 第一个参数是状态码，text/plain为普通文本展示，也可text/html
    res.writeHead(moduleRender.renderStatus(req.url),{"Content-Type":"text/html"})

    res.write(`
        <html>
            <p>this is a html</p>
        </html>
    `)

    res.write("hello") //用了res.write后面必须接end()不然浏览器会一直等待




    res.write(moduleRender.renderHTML(req.url))

    res.end();//end里面也可以传东西，结束语，end后面不能再write
}).listen(5555,()=>{
    console.log("listen")
})