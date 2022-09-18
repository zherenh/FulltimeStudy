const express = require("express")
const router = express.Router()

//路由级别中间件
// 在index里面写了路径了，这里必须空着
router.get("/",(req,res)=>{
    res.send("home")
})


//导出
module.exports = router