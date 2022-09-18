const express = require("express")
const router = express.Router()

//路由级别中间件

//路由挂载
router.get("/",(req,res)=>{
    res.send("/路由")
})

router.get("/home",(req,res)=>{
    res.send("home")
})

router.get("/api",(req,res)=>{
    res.send("api")
})


//导出
module.exports = router