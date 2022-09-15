const http = require('http')
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
            res.end(JSON.stringify({
                name: 'xb',
                age: 100
            }))
            break;
        case "/jsonp": //返回xb({"name":"xb","age":100})
            res.end(`${JSON.stringify({
                name: 'xb',
                age: 100
            })}`)
            break;
        default:
            res.end("404")
    }
}).listen(5555)