const express = require("express")
const app = express()


const homeRouter = require("./routers/homeRouter")
const searchRouter = require("./routers/searchRouter")
const LoginRouter = require("./routers/LoginRouter")

// 配置模版引擎
app.set("views","./views")
app.set("view engine","ejs")

//用html写ejs
//app.set("view engine","html")
//app.engine("html", require("ejs").renderFile) // 支持直接渲染html文件


//配置静态资源
// 可以同时设置多个，public为文件夹
app.use(express.static("public"))



//下面两个必须要加

//配置中间件，
//必须在倒入router之后，app执行之前，配置post参数中间件
app.use(express.urlencoded({extended:false}))
//表示解析post参数，比如
// form编码格式
// uesername=xb&password=1234这种


//post可以响应json参数post请求
app.use(express.json())



// 需要把next作为参数传入
app.use((req, res, next)=>{
    console.log("验证token,应用级别");
    next()
})

//app.use("/",router)//第二个参数导入router模块

// 不同路径分别倒入router
app.use("/home",homeRouter)
app.use("/search",searchRouter)
app.use("/login", LoginRouter)

//如果是这样，则控制二级匹配
// 链接为    /demo/api
// app.use("/demo",router)



//放最后
//错误中间件，用万能路径
//找不到路径时报错，改变状态码，再send
app.use((req,res)=>{
    res.status(404)
    res.send("找不到路径")
})

//启动服务器
app.listen(3000,()=>{
    console.log("server start");
})