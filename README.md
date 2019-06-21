# FE-Monitor

前端埋点监控SDK，一款开箱即用的前端报错监控的埋点SDK。仅需开发埋点接口即可监控收集整个前端项目在运行的时候产生的js内部报错，资源加载异常，接口返回报错，样式丢失的问题。

## 设计目的

1.方便更多的前端开发快速接入前端埋点。
2.为更多中小型的项目增加前端的报错监控。
3.作为一款开源产品帮助更多的项目提升稳定性。

## 项目架构

首先v0.1.0版本设计目的是为了做完整的异常监控，使得前端具备资源加载异常，js运行报错，样式丢失，接口返回异常的捕获能力。

目录结构:
```
├── config // webpack 配置文件
├── dist   // 打包输出文件目录
├── public // 公共文件目录
├── server // server
├── src    // 项目文件目录
├── test
```

* JS-SDK具备获取平台信息的能力
* 获取报错详情与报错的时间
* 当前的url（完整带参数）
* 用户可以自定义上传的参数


## 开发

自动生成changelog 需要在本地下载：

`npm install -g conventional-changelog-cli`


### webpack命令说明

注意：编译前需要安装NodeJS（注意对node10兼容并不是特别友好），并在根目录下运行`npm install`安装所需的模块。

1. `npm run dev / start`

    启动本地调试服务器。

2. `npm run build / dist-js / dev-js`

    编译发行（压缩 / 混淆）版本的js

3. `npm run lint`

    Eslint 修复

4. `npm run server`

    预览打包之后的js


## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2019 MriLiuJY
