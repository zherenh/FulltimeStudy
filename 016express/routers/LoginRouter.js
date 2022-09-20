const express = require("express")
const router = express.Router()

//路由级别中间件
// 在index里面写了路径了，这里必须空着

//响应前端get请求，获取页面渲染
router.get("/",(req,res)=>{


    console.log(req.query); //req.query可以拿到前端传来的get请求的
    // 比如网址是local:3000/login?name=xb&age=100
    //res.send("login")
    // send支持模版和接口

    //res.json 只支持json数据

    // 渲染模版
    res.render("login", {error:"", isShow:false})
    //找views文件夹下的login.ejs
})

// 响应post请求
router.post("/", (req,res)=>{
    if(req.body.username==="123" && req.body.password==="12345"){
        console.log("登陆成功");

        //重定向到下一个页面
        res.redirect("/home") //redirect后面是路径
    }else{
        console.log("登陆失败");
        // render后面是模版
        res.render("login", {error:"用户名密码不匹配", isShow:true})
    }

    // //用body来获取数据，但是必须配置中间件
    // console.log(req.body);
    // const {username, password} = req.body
    // if(username === "123" && password === "12345"){
    //     res.send({ok:1})
    // }
    // res.send({ok:0})
})


//导出
module.exports = router