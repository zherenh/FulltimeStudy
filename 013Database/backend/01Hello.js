/*
*/
function _fun(){
    console.log("方法名前加了下划线为局部方法，只有当前文件调用");
}

function helloworld(){
    console.log("hello world");
}

// 暴露
//这种写法只能同时暴露一个
module.exports = _fun;


//组合暴露
module.exports = {
    _fun:_fun,
    helloworld:helloworld
}

//还可以.完全等价
// exports._fun = _fun;
// exports.helloworld = helloworld;


// 在package文件里加上
// "type":"module"
// 就可以用import和export

export default _fun;

// 这种方法可以导出多个
export {
    _fun,
    helloworld
}