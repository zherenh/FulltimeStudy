//http模块
const http = require("http");
const moduleRender = require("./06module")
const url = require("url");

// 必须配置 type:commonjs在package.json。里面才能运行
//两个参数
// const server = http.createServer((req,res)=>{
const server = http.createServer();
server.on("request", (req, res) => {
    /*旧版
    const urlobj = url.parse(req.url, true)
    console.log(urlobj.query); //可以直接获取api接口的数据
    const pathname = url.parse(req.url).pathname
    */

    //！！！新版url
    // 第二个参数必须为完整地址，目前为本地服务器
    const myURL = new URL(req.url, 'http://127.0.0.1:5555');
    console.log(myURL);
    const pathname  = myURL.pathname;

    //可以通过url.searchParams来进行一个链接字段参数查询操作

    //req接收浏览器传的参数
    //res返回渲染内容
    console.log(req.url);
    // 表示处理不了直接return  
    if (req.url === "/favicon.ico") {
        return
    }

    // 第一个参数是状态码，text/plain为普通文本展示，也可text/html
    res.writeHead(moduleRender.renderStatus(pathname), { "Content-Type": "text/html" })

    res.write(`
        <html>
            <p>this is a html</p> 
        </html>
    `)

    res.write("hello") //用了res.write后面必须接end()不然浏览器会一直等待




    res.write(moduleRender.renderHTML(pathname))

    res.end();//end里面也可以传东西，结束语，end后面不能再write
}).listen(5555, () => {
    console.log("listen")
})

const urlString = 'http://www.baidu.com:443/ad/index.html?id=8&name=mouse#tag=110'
const parseStr = url.parse(urlString)
console.log(parseStr)
// 可以通过parse函数获取网址内所有相关的内容

const urlObj = {
    protocol: 'http:',
    slashes: true,
    auth: null,
    host: 'www.baidu.com:443',
    port: '443',
    hostname: 'www.baidu.com',
    hash: '#tag=110',
    search: '?id=8&name=mouse',
    query: 'id=8&name=mouse',
    pathname: '/ad/index.html',
    path: '/ad/index.html?id=8&name=mouse',
    href: 'http://www.baidu.com:443/ad/index.html?id=8&name=mouse#tag=110'
}
// ！！！！！
console.log(url.format(urlObj)); //可以把一个url对象拼接回url


// resolve进行拼接
let a = url.resolve('/one/two/three', 'four');         // '/one/two/four'
// three后面接斜杠则会保留/three
let aa = url.resolve('/one/two/three/', 'four');        // '/one/two/three/four'
let b = url.resolve('http://example.com/', '/one');    // 'http://example.com/one'
let c = url.resolve('http://example.com/one', '/two'); // 'http://example.com/two'
//在域名的地址后面的所有东西都会被替换
// console.log((a+"."+b+"."+c));





//!!! 新版拼接
let newURL = new URL('/one', 'http://example.com/');
console.log(newURL.href);


//!!新版format
let formatURL = new URL('http://example.com/');
    //第二个参数为可选项，关于选择是否忽略各种字段，进行格式化
console.log(url.format(formatURL, {fragment:false , unicode:false, auth:false}));


//获取文件路径
new URL('file:///xx.txt').pathname // 错误

url.fileURLToPath('file:///xx.txt'); //正确


//还有pathToFileURL
// 路径转换成url


// urlToHttpOptions(mtURL)
// 会变成http对象格式，会有字段上的变化