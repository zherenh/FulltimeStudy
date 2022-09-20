const express = require("express")
const router = express.Router()

//路由级别中间件
// 在index里面写了路径了，这里必须空着
router.get("/",(req,res)=>{

    let list = ["aaaa","bbb","ccc"]
    let message = "<b>加粗</b>"

    // res.send("home")
    res.render("home", {list:list,message:message})
})

router.get("/list",(req,res)=>{
    res.send([111,222,333])
})



//导出
module.exports = router