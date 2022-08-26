# FulltimeStudy

先安装nodeJS

安装TS
npm i -g typescript
强制安装
sudo npm i -g typescript 

创建ts文件

使用tsc对ts文件进行编译
    在ts文件所在目录执行
    tsc xxx.ts

    监视模式，自动转换最新的ts成js，但是只对当前文件
    tsc xxx.ts -w

初始化tsc
tsc --init

在要编译的目录

tsc --init
创建tsc文件，

tsc
编译

tsc -w
监视文件夹下所有文件

配置文件笔记在
tsconfig.json
里面


webpack打包
先
npm init -y
初始化

会出现
package.json

下周webpack
npm i -D webpack webpack-cli typescript ts-loader 

前端浏览器打包，自动生成html文件，是一个插件
npm i -D html-webpack-plugin clean-webpack-plugin
清楚插件，清楚上一次打包好输出的文件clean-webpack-plugin

插件，内置服务器，可以在直接运行,打包后可以用npm start直接运行，且可以实时更新
npm i -D webpack-dev-server

安装babel，可以转换新版代码到旧版以适配各版本浏览器，如es6到es3
npm i -D @babel/core @babel/preset-env babel-loader core-js