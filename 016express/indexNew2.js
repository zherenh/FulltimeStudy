const express = require("express")
const app = express()

const homeRouter = require("./routers/homeRouter")
const searchRouter = require("./routers/searchRouter")

// 需要把next作为参数传入
app.use((req, res, next)=>{
    console.log("验证token,应用级别");
    next()
})

app.use("/",router)//第二个参数导入router模块

// 不同路径分别倒入router
app.use("/home",homeRouter)
app.use("/search",searchRouter)

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