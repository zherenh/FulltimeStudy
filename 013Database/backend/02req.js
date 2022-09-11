//引入
import module from "./01Hello" // 需要完整路径
let moduleFun = require("./01Hello")

//单个方法导入时
// moduleFun();

//多个方法导入时
moduleFun.helloworld();