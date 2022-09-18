const express = require("express")

const app = express()

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



app.get("/api",(req,res)=>{
    res.send({
        name:"xb",
        age:100
    })
})

app.listen(3000,()=>{
    console.log("server start");
})