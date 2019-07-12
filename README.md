# FE-Monitor

前端埋点监控SDK，一款开箱即用的前端报错监控的埋点SDK。仅需开发埋点接口即可监控收集整个前端项目在运行的时候产生的js内部报错，资源加载异常，接口返回报错，样式丢失的问题。

项目在 SDK 内监听全局 error 错误信息，ajax 错误信息，以及监听资源加载，在页面出现报错的情况下直接向埋点接口上报错误信息，监控前端项目的稳定性。

## 设计目的

1.方便更多的前端开发快速接入前端埋点。

2.为更多中小型的项目增加前端的报错监控。

3.作为一款开源产品帮助更多的项目提升稳定性。

## 使用

### 配置项

|属性|参数|默认值|可选值|说明| 
|:----- |:-------|:-----|:-----|----- | 
| method | String | POST | POST，GET | 埋点上报请求方法 |
| url | String | - | - | 埋点上报url地址 |
| id | String | - | - | 标识当前用户 |

可以直接 [下载](https://github.com/MriLiuJY/FE-Monitor/releases) SDK 引入自己项目中即可使用。(dist/js)目录下的打包文件。

### 引入方式

同源的情况下可以直接引入自己的项目中，注意请使用最新的 SDK 以获取更好的效果。

```js
<script src="https://test.com/monitor.0.0.1-beta.js"></script>

<script>
var config = {}
  // your config
};
initMonitor(config, function(monitor) {
  // your code...
  // 销毁实例
  monitor._destory();
});
</script>
```

如果 JS 放在 CDN 上需要单独引入的情况下需要一些额外的 code 。

```js
<script>
var config = {}
  // your config
};
    
var script = document.createElement("script");
// 注意不加这个 crossOrigin 会造成第三方引入的资源无法收集页面报错详情
script.crossOrigin = "anonymous";
script.src = `https://test.com/monitor.0.0.1-beta.js`;
document.body.appendChild(script);
script.addEventListener('load', (e) => {
  initMonitor(config, function(monitor) {
    // your code...
    // 销毁实例
    monitor._destory(); 
  });
});
</script>
```

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


## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2019 MriLiuJY
