const mongoose = require("mongoose")

const UserType = {
    username:String,
    password:String,
    age:Number
}


//第二个参数用schema限制模版类型
const UserModel = mongoose.model("user", new mongoose.Schema(UserType))
// 模型user将会对应users集合


//也可以schema提出来
// const Schema = mongoose.Schema



module.exports = UserModel