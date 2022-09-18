const express = require("express")

const app = express()

let checkToken = (req,res)=>{
    let token = true
    if(token){
        console.log("应用级中间件正在运行");
        next
    }else{
        res.send("error")
    }
}

//应用级别中间件
// 有执行顺序，放前面才会执行，所有app请求都会执行该中间件
app.use(checkToken)

//该写法为只有 "/api"路径才使用该函数中间件
app.use("/api",checkToken)

app.get("/",(req,res)=>{
    res.send(`
        <html>
            <div>helloworld</div>
        </html>
    `)//发送字符串或者html
})

//字符串路径匹配

// "ab?cd" 会匹配acd和abcd"

// "/ab/***" *为占位符，*可以为任意字符，比如可以匹配 /ab/1111, /ab/1231
// "/ab/:id" 其中:为占位符 /ab/后面有东西就可以响应

// "ab+cd" 这里b可以重复一次或者多次， abcd abcccd
// "ab*cd" b后面可以输入任意一个或者多个字符 ab*cd ababababcd
// "ab(cd)?e"  cd要不然都写，要不然都不写



//支持正则表达式


//回调函数就是中间键
app.get("/api",(req,res)=>{
    //验证用户token过期，cookie过期
    //查询数据库
    //返回内容
    res.send({
        name:"xb",
        age:100
    })
})

// 运用中间键，可以多个中间键
app.get("/demo",(req,res)=>{
    //验证用户token过期，cookie过期
    if(true){
        next()// 为继续执行下一个中间件函数
    }else{
        res.send("error") // send和return一个含义，会结束函数
        // 返回错误
    }
},(req,res)=>{
    //查询数据库
    res.data = "通过res的属性值传递值"
    next()
},(req,res)=>{ 
    //返回内容
})

app.listen(3000,()=>{
    console.log("server start");
})

let fun1 = (req,res)=>{}
let fun2 = (req,res)=>{}
let fun3 = (req,res)=>{}
//也可以这样写
app.get("/arr", [fun1,fun2,fun3])




