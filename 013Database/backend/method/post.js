const http = require('http')
const https = require('https')
const url = require('url')

http.createServer((req, res) => {image.png
    let urlobj = url.parse(req.url,true)
    // console.log(urlobj.query.callback);
    res.writeHead(200,{
        "Content-Type":"application/json;charset=utf-8",
        // cors 跨域
        //!!! *号换成ip就是只给该ip访问权限解决跨域问题
        "access-control-allow-origin":"*" //
    })
    switch (urlobj.pathname) {
        case "/api/aaa":
            // 去网址找数据
            //httpGet(res)

            httpPost((data)=>{
                res.end(data)
            })
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

function httpPost(response){
    let data = ""
    let option = {
        hostname:"m.xiaomiyoupin.com",
        post:"443",
        path:"/mtop/market/search/placeHolder",
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        }
    }
    let req = https.request(option, (res)=>{
        res.on("data",(chunk)=>{
            data += chunk
        }) 
        //监听数据接收接收
        res.on("end",()=>{
            console.log("输出正常"); 
            response(data);
        })
    })
    req.write(JSON.stringify([{},{"baseParam":{"ypClient":1}}]))
    req.end()
}