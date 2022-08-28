//默认名字
//配置信息
const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');

const {CleanWebpackPlugin} = require('clean-webpack-plugin');

//webpack里面所有的配置信息都应该写在module.exports里面
module.exports={
    // 指定入口文件，一般都在scr下面的index
    entry: "./src/index/ts", 

    //打包文件所在目录
    output:{
        //指定打包后目录
        path:path.resolve(__dirname,'dist'),
        //打包后的文件的文件名
        filename:"bundle.js",

        environment:{
            //可以在环境里设置自动生成的东西，是否要使用某些功能
            // 比如不使用箭头函数
            // arrowFunction:false
        }
    },

    //指定webpack打包时要使用的模块
    module:{
        //指定要加载的规则
        rules:[
            {
                //test指定的是规则生效的文件
                test: /\.ts$/, //表示匹配所有ts结尾的文件
                //要使用的loader
                use:[
                    {
                        //指定加载器
                        loader:'babel-loader',
                        option:{
                            //设置预定义的环境
                            presets:[
                                //指定环境插件
                                "@babel/preset-env",
                                //配置信息
                                {
                                    //要兼容的浏览器
                                    targets:{
                                        "chrome":"87"//兼容chrome 87 版本
                                    },
                                    //设置了core之后，如果当前版本浏览器没有自己想要的功能，corejs将调用并且编译成可使用
                                    "corejs":"3",//去package.json文件里去看corejs下载的是什么版本

                                    // 使用corejs的方式"usage"表示安需加载
                                    "useBuiltIns":"usage"
                                }
                            ]
                        }
                    },
                    'ts-loader' // ts-load放最后
                ],
                //要排除的文件,不需要编译什么，路径里有node-module就不编译
                exclude: /node-modules/
            }
        ]
    },
    //配置webpack插件
    plugins:[
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({ 
            title:"这是一个自定义title"

            // 导入模版，导出文件会把script文件插入template模版中导出
            // template:"./../"
        }),
    ],
    //会在一个html自动引入已经导出的文件


    //设置模块引入
    resolve:{
        // js和ts结尾的文件可以作为模块引入
        extensions:['.ts', '.js']
    }
}

//同目录下需要一个 tsconfig.json 配置文件