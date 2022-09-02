# FulltimeStudy

先安装 nodeJS

安装 TS
npm i -g typescript
强制安装
sudo npm i -g typescript

创建 ts 文件

使用 tsc 对 ts 文件进行编译
在 ts 文件所在目录执行
tsc xxx.ts

    监视模式，自动转换最新的ts成js，但是只对当前文件
    tsc xxx.ts -w

初始化 tsc
tsc --init

在要编译的目录

tsc --init
创建 tsc 文件，

tsc
编译

tsc -w
监视文件夹下所有文件

配置文件笔记在
tsconfig.json
里面

webpack 打包
先
npm init -y
初始化

会出现
package.json

下周 webpack
npm i -D webpack webpack-cli typescript ts-loader

前端浏览器打包，自动生成 html 文件，是一个插件
npm i -D html-webpack-plugin clean-webpack-plugin
清楚插件，清楚上一次打包好输出的文件 clean-webpack-plugin

插件，内置服务器，可以在直接运行,打包后可以用 npm start 直接运行，且可以实时更新
npm i -D webpack-dev-server

安装 babel，可以转换新版代码到旧版以适配各版本浏览器，如 es6 到 es3
npm i -D @babel/core @babel/preset-env babel-loader core-js

出现这个 bug：
访问器仅在面向 ECMAScript 5 和更高版本时可用
error TS1056: Accessors are only available when targeting ECMAScript 5 and higher.
->
先改配置文件 tsconfig.ts 里面的 target 到 es6
再
tsc xxx.ts -t es6
这样将导出 es6 的 js 文件

Dictionary Class:
class Dictionary {
    items: object;
    constructor() {
       this.items = {};
    }
    has(key: any): boolean {
        return this.items.hasOwnProperty(key);
    }
    set(key: any, val: any) {
        this.items[key] = val;
    }
    delete(key: any): boolean {
        if (this.has(key)) {
            delete this.items[key];
        }
        return false;
    }
    get(key: any): any {
        return this.has(key) ? this.items[key] : undefined;
    }
    values(): any[] {
        let values: any[] = [];
        for (let k in this.items) {
            if (this.has(k)) {
                values.push(this.items[k]);
            }
        }
        return values;
    }
}



npm ts-node xxx.ts
直接运行ts文件