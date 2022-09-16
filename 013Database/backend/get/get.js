const http = require('http')
const https = require('https')
const url = require('url')

const app = http.createServer((req, res) => {
   
    let urlobj = url.parse(req.url,true)
    // console.log(urlobj.query.callback);
    res.writeHead(200,{
        "Content-Type":"application/json;charset=utf-8",
        // cors 跨域
        //!!! *号换成ip就是只给该ip访问权限
        "access-control-allow-origin":"*" //
    })
    switch (urlobj.pathname) {
        case "/demo":
            console.log("listen");
            // 去网址找数据
            httpGet(res)
            break;
        default:
            res.end("404")
    }
}).listen(5555)

function httpGet(response){
    let data = ""
    //如果是https，安全协议,则需要引入https模块
    https.get(`https://sso.unimelb.edu.au/`,(res)=>{
        //监听数据接收
        res.on("data",(chunk)=>{
            data += chunk
        })
        //监听数据接收接收
        res.on("end",()=>{
            console.log(data);
            response.end(data);
        })
    })
}