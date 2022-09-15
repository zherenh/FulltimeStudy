const querystring = require('querystring')
let str = "name=xb&age=22"

//解析成对象，把url转换成对象
let obj = querystring.parse(str)
console.log(obj);


let str1 = 'id=38&city=mel'
//转译防止注入
let escaped = querystring.escape(str1)
console.log(escaped);

//解密
let str2 = querystring.unescape(escaped)
console.log(str2);