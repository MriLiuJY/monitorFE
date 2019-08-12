# MonitorFE

The front-end buried point monitoring SDK, an out-of-the-box front-end error monitoring buried point SDK. Only need to develop the buried interface to monitor and collect the internal error of the js generated during the running of the entire front-end project, the resource loading is abnormal, the interface returns an error, and the style is lost.

The project listens for global error error information, ajax error information, and listener resource loading in the SDK. When an error occurs on the page, the error message is directly reported to the buried interface to monitor the stability of the front-end project.

[中文文档](https://github.com/MriLiuJY/monitorFE/blob/master/docs/README_ZH.md)

## aim of design

1. Convenient for more front-end development and quick access to the front-end buried point.

2. Increase front-end error monitoring for more small and medium-sized projects.

3. As an open source product to help more projects improve stability.

![MonitorFE](https://github.com/MriLiuJY/monitorFE/blob/master/MonitorFE.gif "MonitorFE")

## Use

### Configuration Item

A configuration item for passing in `initMonitor`.

|Attributes|Parameters|Defaults|Optional Values|Description|
|:----- |:-------|:-----|:-----|----- |
| method | String | POST | POST,GET | Buried Point Reporting Request Method |
| url | String | - | - | Buried point report url address |
| id | String | - | - | Identifies the current user |
| record | Boolean | false | - | Whether to record user actions for playback |

You can use the [Download](https://github.com/MriLiuJY/FE-Monitor/releases) SDK to bring it into your own project. Package files in the (dist/js) directory.

### Introduction method

**npm download**

```
Npm install fe-monitor-sdk
```

Or you can use the Taobao NPM image to install:

```
Npm install fe-monitor-sdk --registry=https://registry.npm.taobao.org
```

*use*

```js
Var initMonitor = require("fe-monitor-sdk");

Var config = {}
  // your config
};
initMonitor(config, function(monitor) {
  // your code...
  // Destroy the instance
  Monitor._destory();
});
```

In addition, the browser does not support the `CommonJS` specification, so it needs to be packaged using tools such as `Browserify` or `Webpack`.


**js file introduction**

If you have the same origin, you can directly import it into your own project. Please use the latest SDK for better results.

```js
<script src="https://test.com/monitor.0.0.1-beta.js"></script>

<script>
Var config = {}
  // your config
};
initMonitor(config, function(monitor) {
  // your code...
  // Destroy the instance
  Monitor._destory();
});
</script>
```

If the JS is placed on the CDN and needs to be introduced separately, some extra code is needed.

```js
<script>
Var config = {}
  // your config
};
    
Var script = document.createElement("script");
// Note that not adding this crossOrigin will cause resources imported by third parties to fail to collect page error details.
script.crossOrigin = "anonymous";
Script.src = `https://test.com/monitor.0.0.1-beta.js`;
document.body.appendChild(script);
script.addEventListener('load', (e) => {
  initMonitor(config, function(monitor) {
    // your code...
    // Destroy the instance
    Monitor._destory();
  });
});
</script>
```

The project adds [rrweb](https://github.com/rrweb-io/rrweb) to the recording playback function after v0.0.3. You can choose whether to pass the value of `record` in the config of `initMonitor`. Turn on recording. If the value is true, the error will report the collected data for playback error replay.

Please note that there are some compatibility issues when opening rrweb. Please note:

> Due to the `MutationObserver` API, rrweb does not support browsers below IE11. A list of compatible browsers can be found from [here](https://caniuse.com/#feat=mutationobserver).

## Project Architecture

Firstly, the v0.1.0 version is designed to perform complete exception monitoring, so that the front end has resource loading exceptions, js runs error reporting, style is lost, and the interface returns an abnormal capture capability.

Directory Structure:
```
├── config // webpack configuration file
├── dist // package output file directory
├── public // public file directory
├── server // server
├── src // project file directory
├── test
```

* JS-SDK has the ability to obtain platform information
* Get the details of the error and the time of the error
* Current url (complete with parameters)
* Users can customize the uploaded parameters


## Development

Automatically generating a changelog needs to be downloaded locally:

`npm install -g conventional-changelog-cli`


## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2019 MriLiuJY