const http = require('http')
const url = require('url')


const app = http.createServer((req, res) => {
    let urlobj = url.parse(req.url,true)
    console.log(urlobj.query.callback);
    switch (urlobj.pathname) {
        case "/demo":
            res.end(JSON.stringify({
                name: 'xb',
                age: 100
            }))
            break;
        case "/jsonp": //返回xb({"name":"xb","age":100})
            res.end(`${urlobj.query.callback}(${JSON.stringify({
                name: 'xb',
                age: 100
            })})`)
            break;
        default:
            res.end("404")
    }
}).listen(5555)